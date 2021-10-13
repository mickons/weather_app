import React, { useState } from "react";
import clouds from "../src/assets/clouds.png";
import CountrySelector from "../src/components/CountrySelector";
import WeatherResult from "../src/components/WeatherResult";

const api = {
  key: "d58aba219971924715b5ebbfde38970d",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  //api.openweathermap.org/data/2.5/weather?q=paris&units=metric&APPID=d58aba219971924715b5ebbfde38970d

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setQuery("");
        setWeather(result);
      });
  };

  const dayBuilder = (d) => {
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

    return `${day}`;
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  //     .then((res) => res.json())
  //         .then((result) => {
  //           setQuery("");
  //           setWeather(result);
  //     console.log("enter");
  //   }
  // }

  return (
    <div className="app">
      <main>
        <div className="d-flex flex-row">
          <div className="search_box">
            <img src={clouds} className="cloud" />
            <div onSubmit={handleSubmit} className="d-flex flex-row">
              <CountrySelector className="country_selector" />
              <input
                type="text"
                className="search_bar"
                placeholder="Please enter your location..."
                onChange={(e) => setQuery(e.target.value)}
              />
              <input type="submit" />
            </div>
          </div>
        </div>
        <div>
          <div className="location_box">
            <div className="location">Novi Sad</div>
            <div className="date">13 October</div>
          </div>
          <div className="weather_box">
            <div className="weather">Sunny</div>
            <div className="temp">10 °C</div>
          </div>
        </div>
        {/* {showWeatherResult && (
          <WeatherResult
            showModal={showWeatherResult}
            setShowModal={setShowWeatherResult}
          />
        )}
        <button onClick={() => setShowWeatherResult(true)}>show result</button> */}
      </main>
    </div>
  );
};

export default App;
