import React, { useState } from "react";

const api = {
  key: "d58aba219971924715b5ebbfde38970d",
  base: "https://api.openweathermap.org/data/2.5/",
};

const ForecastWeather = () => {
  const [query, setQuery] = useState("");
  const [weeklyForecast, setWeeklyForecast] = useState({});

  const handleSubmit = (lat, lon) => {
    fetch(
      `${api.base}onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${api.key}`
    )
      .then((res) => res.json())

      .then((result) => {
        setQuery("");
        setWeeklyForecast(result);
        console.log(result);
      });
  };
  return <div> Weekly Forecast</div>;
};

export default ForecastWeather;
