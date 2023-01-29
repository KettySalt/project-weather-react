import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.city);
  let [cityWeather, setCityWeather] = useState({ ready: false });

  function showWeather(response) {
    setCityWeather({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      temperature: Math.round(response.data.temperature.current),
      like: Math.round(response.data.temperature.feels_like),
      pressure: response.data.temperature.pressure,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      imgUrl: response.data.condition.icon_url,
    });
  }

  function search() {
    let apiKey = "3te112f50837749e5bfeo6adf636e68f";
    let apiNewUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiNewUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (cityWeather.ready) {
    return (
      <div className="Weather">
        <div className="card-body">
          <form className="form-search" onSubmit={handleSubmit}>
            <div className="row g-1">
              <div className="col-8">
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="City"
                    className="search"
                    id="input-city"
                    style={{ width: "100%", height: "40px" }}
                    onChange={handleCityChange}
                  />
                  <i className="fa fa-search"></i>
                </div>
              </div>
              <div className="col-2">
                <input
                  className="search-batton"
                  type="submit"
                  value="Search"
                  style={{ width: "100%", height: "40px" }}
                />
              </div>
              <div className="col-2">
                <input
                  className="current-batton"
                  type="button"
                  value="Current"
                  style={{ width: "100%", height: "40px" }}
                  id="current"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={cityWeather} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
