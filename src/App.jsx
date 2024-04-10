import DetailedWeatherInfo from "./components/Detailed/DetailedWeatherInfo";
import MainWeatherInfo from "./components/Main/MainWeatherInfo";
import WeatherProvider from "./context/weatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="app">
        <div className="left">
          <div className="main">
            <MainWeatherInfo />
          </div>
        </div>

        <div className="right">
          <div className="detailed">
            <DetailedWeatherInfo className="detailed" />
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
