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

  //api.openweathermap.org/data/2.5/weather?q=belgrade&units=metric&APPID=d58aba219971924715b5ebbfde38970d
  //https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=daily&appid=d58aba219971924715b5ebbfde38970d

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setQuery("");
        setWeather(result);
        console.log(result);
      });
  };

  console.log(weather);

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
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
    //let year = d.getFullYear();

    return `${month} ${day} ${date} `;
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
    <div className="app_results">
      <main className="main">
        <div className="search_box">
          <img src={clouds} className="cloud" alt="" />
          <form onSubmit={handleSubmit}>
            {/* <CountrySelector className="country_selector" /> */}
            <input
              type="text"
              className="search_bar"
              placeholder="Please enter your location..."
              onChange={(e) => setQuery(e.target.value)}
            />
            {/* <input type="submit" /> */}
          </form>
        </div>

        <div>
          <div className="location_box">
            <div className="location">{weather.name}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather_box">
            <div className="temp">{weather.main && weather.main.temp}°C</div>
          </div>
        </div>
        <div className="daily_temp"></div>
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
