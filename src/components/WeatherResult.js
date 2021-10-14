import React, { useState } from "react";
import clouds from "../assets/clouds.png";
import CountrySelector from "../components/CountrySelector";

const WeatherResult = () => {
  return (
    <div className="app_results">
      <main>
        <div className="d-flex flex-row">
          <div className="search_box">
            <img src={clouds} className="cloud" />
            <CountrySelector className="country_selector" />
            <input
              type="text"
              className="search_bar"
              placeholder="Please enter your location..."
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default WeatherResult;
