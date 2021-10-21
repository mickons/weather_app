import React, { useState } from "react";
import clouds from "../src/assets/clouds.png";
import ForecastWeather from "./components/ForecastWeather";

const api = {
  key: "d58aba219971924715b5ebbfde38970d",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then((res) => res.json())

      .then((result) => {
        setQuery("");
        setWeather(result);
        console.log(result);
      });
  };

  const dateBuilder = (d) => {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();

    return `${month} ${day} ${date} `;
  };

  return (
    <div className="app_results">
      <main className="main">
        <div className="search_box">
          <img src={clouds} className="cloud" alt="" />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="search_bar"
              placeholder="Please enter your location..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
          </form>
        </div>

        <div>
          <div className="location_box">
            <div className="location">{weather.name}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather_box">
            <div className="temp">{weather.main && weather.main.temp} °C</div>
          </div>
          <div className="weather">
            {weather.weather && weather.weather[0].main}
          </div>
        </div>
        <div className="weekly_forecast">
          <ForecastWeather />
        </div>
      </main>
    </div>
  );
};

export default App;
