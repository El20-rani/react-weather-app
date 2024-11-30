import React from "react";
import "./App.css";
import Weather from "./weather";

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
