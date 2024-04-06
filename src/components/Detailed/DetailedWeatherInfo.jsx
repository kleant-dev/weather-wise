import React from "react";
import Card from "../../ui/Card";
import Footer from "./Footer";
import styles from "./DetailedWeatherInfo.module.css";

const DetailedWeatherInfo = () => {
  return (
    <>
      <div className={styles.right}>
        <div className={styles["info-cards"]}>
          <Card title="Wind">
            <div>
              <p>17KM/h</p>
              <p>West</p>
            </div>
          </Card>
          <Card title="Humidity">
            <p>38%</p>
          </Card>
          <Card title="Real Feel">
            <p>5*C</p>
          </Card>
          <Card title="UV Index">
            <div>
              <p>0</p>
              <p>Low</p>
            </div>
          </Card>
          <Card title="Pressure">
            <div>
              <p>1005mbar</p>
              <p>Rising</p>
            </div>
          </Card>
          <Card title="Chance of rain">
            <p>40%</p>
            <p>Day</p>
          </Card>
          <Card title="Temperature History">
            <div>
              <div>
                <img src="" alt="" />
                <p>9*C</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>4*C</p>
              </div>
            </div>
          </Card>
          <Card title="Sun">
            <div>
              <p>
                Rise <span>06:32 AM</span>
              </p>
              <p>
                Set <span>07:26 PM</span>
              </p>
            </div>
          </Card>
          <Card title="Moon">
            <div>
              <p>
                Rise <span>06:32 AM</span>
              </p>
              <p>
                Set <span>07:26 PM</span>
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
