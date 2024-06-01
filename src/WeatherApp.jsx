import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLikes: 24.34,
    humidityCurr: "Goodu babu",
    tempMax: 12,
    tempMin: 22,
    temprature: 25,
    weatherInfo: "Garda",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App by Pratyush</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
