import { useEffect, useState } from "react";
import styles from "./WeatherSummary.module.css";
import { useWeather } from "../../context/weatherContext";

const date = new Date();
const year = date.getFullYear();
const day = date.getDate();
const month = date.toLocaleString("default", { month: "long" });
const dayName = date.toLocaleDateString("default", { weekday: "long" });

export default function WeatherSummary() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("default"));

  const { current } = useWeather();
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("default"));
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [setTime]);
  if (current.length > 0)
    return (
      <div className={styles.summary}>
        <img
          src={`https://www.accuweather.com/images/weathericons/${current[0].WeatherIcon}.svg`}
          alt="weather-icon"
          className={styles.icon}
        />
        <div className={styles.metrics}>
          <p className={styles.temperature}>
            {current[0].Temperature.Metric.Value}°C
          </p>
          <p className={styles.status}>{current[0].WeatherText}</p>
        </div>

        <div className={styles.data}>
          <p className={styles.date}>
            {day} {month} {year}
          </p>
          <p className={styles.time}>
            {" "}
            {dayName}, {time.slice(0, 5)} {time.slice(8)}
          </p>
          <p className={styles.day}>{current[0].IsDayTime ? "Day" : "Night"}</p>
        </div>
      </div>
    );
}
