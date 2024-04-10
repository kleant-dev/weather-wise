/* eslint-disable no-unused-vars */
import Card from "../../ui/Card";
import Footer from "./Footer";
import styles from "./DetailedWeatherInfo.module.css";
import { useWeather } from "../../context/weatherContext";
import { useState } from "react";
import { formatTime } from "../../helpers/formatTime";
import getDayName from "../../helpers/getDayName";

const DetailedWeatherInfo = () => {
  const { data, current } = useWeather();
  const [index, setIndex] = useState(0);
  if (!data || !data.DailyForecasts) {
    return <div>Loading...</div>; // or any loading indicator you prefer
  }

  // Check if the index is within bounds of the DailyForecasts array
  if (index >= data.DailyForecasts.length) {
    return <div>No forecast available for selected index.</div>;
  }
  if (current.length > 0)
    return (
      <>
        <div className={styles.right}>
          <header className={styles.header}>
            <p
              className={`${styles.day} ${index === 0 ? "active" : ""}`}
              onClick={() => setIndex(0)}
            >
              Today
            </p>
            <p
              className={`${styles.day} ${index === 1 ? "active" : ""}`}
              onClick={() => setIndex(1)}
            >
              Tomorrow
            </p>
            <p
              className={`${styles.day} ${index === 2 ? "active" : ""}`}
              onClick={() => setIndex(2)}
            >
              {getDayName(data.DailyForecasts[2].Date)}
            </p>
            <p
              className={`${styles.day} ${index === 3 ? "active" : ""}`}
              onClick={() => setIndex(3)}
            >
              {getDayName(data.DailyForecasts[3].Date)}
            </p>
            <p
              className={`${styles.day} ${index === 4 ? "active" : ""}`}
              onClick={() => setIndex(4)}
            >
              {getDayName(data.DailyForecasts[4].Date)}
            </p>
          </header>
          <div className={styles["info-cards"]}>
            <Card title="Wind">
              <div>
                <p className={styles.info}>
                  {data.DailyForecasts[index].Day.Wind.Speed.Value}KM/h
                </p>
                <p>
                  {data.DailyForecasts[index].Day.WindGust.Direction.English}
                </p>
              </div>
            </Card>
            <Card title="Humidity">
              <p className={styles.info}>
                {data.DailyForecasts[index].Day.RelativeHumidity.Average}%
              </p>
            </Card>
            <Card title="Real Feel">
              <p className={styles.info}>
                {current[0].ApparentTemperature.Metric.Value}°C
              </p>
            </Card>
            <Card title="UV Index">
              <div>
                <p className={styles.info}>
                  {data.DailyForecasts[index].AirAndPollen[5].Value}
                </p>
                <p>{data.DailyForecasts[index].AirAndPollen[5].Category}</p>
              </div>
            </Card>
            <Card title="Pressure">
              <div>
                <p className={styles.info}>
                  {current[0].Pressure.Metric.Value} mb
                </p>
                <p>{current[0].PressureTendency.LocalizedText}</p>
              </div>
            </Card>
            <Card title="Chance of rain">
              <p className={styles.info}>
                {data.DailyForecasts[index].Day.RainProbability}%
              </p>
            </Card>
            <Card title="Temperature History">
              <>
                <div className={styles.temperature}>
                  <p className={styles.info}>
                    {data.DailyForecasts[index].Temperature.Maximum.Value}°C
                  </p>
                  <p className={styles.info}>
                    {data.DailyForecasts[index].Temperature.Minimum.Value}°C
                  </p>
                </div>
              </>
            </Card>
            <Card title="Sun">
              <div>
                <p className={styles.rise}>
                  Rise{" "}
                  <span className={styles.time}>
                    {formatTime(data.DailyForecasts[index].Sun.Rise)}
                  </span>
                </p>
                <p className={styles.set}>
                  Set{" "}
                  <span className={styles.time}>
                    {formatTime(data.DailyForecasts[index].Sun.Set)}
                  </span>
                </p>
              </div>
            </Card>
            <Card title="Moon">
              <div>
                <p className={styles.rise}>
                  Rise{" "}
                  <span className={styles.time}>
                    {formatTime(data.DailyForecasts[index].Moon.Rise)}
                  </span>
                </p>
                <p className={styles.set}>
                  Set{" "}
                  <span className={styles.time}>
                    {formatTime(data.DailyForecasts[index].Moon.Set)}
                  </span>
                </p>
              </div>
            </Card>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </>
    );
};

export default DetailedWeatherInfo;
