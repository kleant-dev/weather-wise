import Search from "./Search";
import WeatherSummary from "./WeatherSummary";
import styles from "./MainWeatherInfo.module.css";

export default function MainWeatherInfo() {
  return (
    <div className={styles.main}>
      <Search />
      <WeatherSummary />
    </div>
  );
}
