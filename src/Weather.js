import React,{ useState } from "react";
import axios from "axios"; 
import WeatherForecast from "./WeatherForecast"
import WeatherInfo from "./WeatherInfo";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  
    function search() {
      let apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(handleResponse);
    }
  
    function handleResponse(response) {
      setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
        coord: response.data.coord,
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      search();
    }
    function handleCity(event) {
      setCity(event.target.value);
    }
    if (weatherData.ready) {
      return (
        <div className="weather border #dadde1 rounded">
          <form onSubmit={handleSubmit} className="main">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCity}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coord}/>
        </div>
      );
    } else {
      search();
      return "Loading";
    }
  }