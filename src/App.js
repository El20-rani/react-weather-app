import React from "react";
import "./App.css";
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          <p>
            This project was coded by Eleni Z. B. and is open-sourced
            open-sourced on
            <a
              href="https://github.com/El20-rani/react-weather-app.git"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
