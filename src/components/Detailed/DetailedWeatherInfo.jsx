import React from "react";
import Card from "../../ui/Card";
import Footer from "./Footer";
import styles from "./DetailedWeatherInfo.module.css";

const DetailedWeatherInfo = () => {
  return (
    <>
      <div className={styles.right}>
        <header className={styles.header}>
          <p>Today</p>
          <p>Tomorrow</p>
        </header>
        <div className={styles["info-cards"]}>
          <Card title="Wind">
            <div>
              <p className={styles.info}>17KM/h</p>
              <p>West</p>
            </div>
          </Card>
          <Card title="Humidity">
            <p className={styles.info}>38%</p>
          </Card>
          <Card title="Real Feel">
            <p className={styles.info}>5*C</p>
          </Card>
          <Card title="UV Index">
            <div>
              <p className={styles.info}>0</p>
              <p>Low</p>
            </div>
          </Card>
          <Card title="Pressure">
            <div>
              <p className={styles.info}>1005mbar</p>
              <p>Rising</p>
            </div>
          </Card>
          <Card title="Chance of rain">
            <p className={styles.info}>40%</p>
            <p>Day</p>
          </Card>
          <Card title="Temperature History">
            <>
              <div className={styles.temperature}>
                <p className={styles.info}>9*C</p>
                <p className={styles.info}>4*C</p>
              </div>
            </>
          </Card>
          <Card title="Sun">
            <div>
              <p className={styles.rise}>
                Rise <span className={styles.time}>06:32 AM</span>
              </p>
              <p className={styles.set}>
                Set <span className={styles.time}>07:26 PM</span>
              </p>
            </div>
          </Card>
          <Card title="Moon">
            <div>
              <p className={styles.rise}>
                Rise <span className={styles.time}>06:32 AM</span>
              </p>
              <p className={styles.set}>
                Set <span className={styles.time}>07:26 PM</span>
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
