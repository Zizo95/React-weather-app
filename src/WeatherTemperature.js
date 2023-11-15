import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("Celsius");
  if (unit === `Celsius`) {
    return (
      <div className="weatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">°C | °F</span>
      </div>
    );
  } else {
    let Fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="weatherTemperature">
        <span className="temperature">{Math.round(Fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
        <span className="unit">
          °C
          <a href="/" onClick={convertToFahrenheit}>
            | °F{" "}
          </a>
        </span>
      </div>
    );
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("Celsius");
  }
}