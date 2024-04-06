import DetailedWeatherInfo from "./components/Detailed/DetailedWeatherInfo";
import MainWeatherInfo from "./components/Main/MainWeatherInfo";

function App() {
  return (
    <div className="app">
      <div className="left">
        <div className="main">
          <MainWeatherInfo />
          <p className="location">Tirana Albania</p>
        </div>
      </div>

      <div className="right">
        <div className="detailed">
          <DetailedWeatherInfo className="detailed" />
        </div>
      </div>
    </div>
  );
}

export default App;
