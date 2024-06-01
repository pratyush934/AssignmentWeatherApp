import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7f3d723096ac10f9d61869203ec3c7da";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const JSONResponse = await response.json();
      const result = {
        city: city,
        temprature: JSONResponse.main.temp,
        tempMin: JSONResponse.main.temp_min,
        tempMax: JSONResponse.main.temp_max,
        humidityCurr: JSONResponse.main.humidity,
        feelsLikes: JSONResponse.main.feels_like,
        weatherInfo: JSONResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const [city, setCity] = useState("");
  const [error, setError] = useState();

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      getWeatherInfo();
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="searchBox">
      <h1>Search for city</h1>
      <form action="">
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        {error && (
          <p>Sorry the {city} you want does not exist in our database</p>
        )}
      </form>
    </div>
  );
}

export default SearchBox;
