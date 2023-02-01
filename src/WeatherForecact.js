import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecactDay from "./WeatherForecastDay";

import "./WeatherForecast.css";
export default function WeatherForecact(props) {
  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row g-1 forecast-line">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecactDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "3te112f50837749e5bfeo6adf636e68f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
