import React from "react";
import styles from "./WeatherSummary.module.css";

export default function WeatherSummary() {
  return (
    <div className={styles.summary}>
      <img
        src="/src/assets/34.svg"
        alt="weather-icon"
        className={styles.icon}
      />
      <div className={styles.metrics}>
        <p className={styles.temperature}>10*C</p>
        <p className={styles.status}>Sunny</p>
      </div>

      <div className={styles.data}>
        <p className={styles.date}>5 April 2024</p>
        <p className={styles.time}> Friday, 06:52 PM </p>
        <p className={styles.day}>Day</p>
      </div>
    </div>
  );
}
