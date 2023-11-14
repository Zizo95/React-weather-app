import React from "react";
import Weather from "./Weather";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather />
      </div>
    </div>
  );
}
 

