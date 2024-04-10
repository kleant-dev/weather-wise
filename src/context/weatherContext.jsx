/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  const [position, setPosition] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [key, setKey] = useState(6522);
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [current, setCurrent] = useState([]);
  useEffect(() => {
    function getPosition() {
      if (!navigator.geolocation)
        return setError("Your browser does not support geolocation");

      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          setIsLoading(false);
        },
        (error) => {
          setError(error.message);
          setIsLoading(false);
        }
      );
    }
    if (!position.lat || !position.lng) getPosition();

    async function getLocationCity() {
      const res = await fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=pGmwf201CfM0VAsuHftloI1iyhs0dgpV&q=${position.lat}%2C${position.lng}`
      );
      const data = await res.json();

      setKey(data.Key);
      setCity(data.LocalizedName);
    }
    if (position.lat && position.lng) {
      // Check if position has been updated
      getLocationCity();
    }

    async function getSearchedCity() {
      const res = await fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=pGmwf201CfM0VAsuHftloI1iyhs0dgpV&q=${searchQuery}&language=en-us&details=false`
      );
      const data = await res.json();
      setKey(data[0].Key);
      setCity(data[0].LocalizedName);
    }
    if (searchQuery.length > 4) getSearchedCity();
  }, [position.lat, position.lng, searchQuery]);

  useEffect(() => {
    async function fetchCurrentConditions() {
      const res = await fetch(
        `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=pGmwf201CfM0VAsuHftloI1iyhs0dgpV&language=en-us&details=true`
      );
      const data = await res.json();
      setCurrent(data);
    }
    fetchCurrentConditions();

    async function fetchWeatherData() {
      setIsLoading(true);
      const res = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=pGmwf201CfM0VAsuHftloI1iyhs0dgpV&language=en-US&details=true&metric=true`
      );
      const data = await res.json();
      setData(data);
    }
    fetchWeatherData();
  }, [key]);

  return (
    <WeatherContext.Provider
      value={{
        data,
        isLoading,
        current,
        setSearchQuery,
        city,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const value = useContext(WeatherContext);
  if (!value) throw new Error("Used out of context");
  return value;
}
