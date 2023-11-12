import React,{ useState } from "react";
import axios from "axios"; 
import "./index.css";
import Date from "./Date"
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
    let [city, setCity] = useState("");
    let [loaded, setLoaded] = useState(false);
    let [weather, setWeather] = useState({});
  
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(displayWeather);
    }
  
    function displayWeather(response) {
      setLoaded(true);
      setWeather({
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        description: response.data.weather[0].description
      });
    }
  
    function updateCity(event) {
      setCity(event.target.value);
    }
  
    const form = (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Type a city" onChange={updateCity} />
          <input type="submit" value="search" />
        </form>
      </div>
    );
  
    if (loaded) {
      return (
        <div className="Weather">
          {form}
  
          <ul>Temperature: {Math.round(weather.temperature)}°C </ul>
          <ul>Description: {weather.description} </ul>
          <ul>Humidity: {weather.humidity}% </ul>
          <ul>Wind: {weather.wind}km/h </ul>
          <ul>
            <img src={weather.icon} alt={weather.description} />
          </ul>
        </div>
      );
    } else {
      return form;
    }
  }