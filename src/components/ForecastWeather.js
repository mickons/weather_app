import React, { useState } from "react";

const api = {
  key: "d58aba219971924715b5ebbfde38970d",
  base: "https://api.openweathermap.org/data/2.5/",
};

const ForecastWeather = () => {
  const [query, setQuery] = useState("");
  const [weeklyForecast, setWeeklyForecast] = useState({});

  navigator.geolocation.getCurrentPosition((success) => {
    console.log(success);

    let { latitude, longitude } = success.coords;
    fetch(
      `${api.base}onecall?lat=${latitude}&lon=${longitude}&exclude=daily&appid=${api.key}`
    ).then((res) =>
      res.json().then((data) => {
        console.log(data);
      })
    );
  });

  //   const handleSubmit = (lat, lon) => {
  //     fetch(
  //       `${api.base}onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${api.key}`
  //     )
  //       .then((res) => res.json())

  //       .then((result) => {
  //         setQuery("");
  //         setWeeklyForecast(result);
  //         console.log(result);
  //       });
  //   };
  return (
    <div>
      <div> Weekly Forecast</div>
    </div>
  );
};

export default ForecastWeather;
