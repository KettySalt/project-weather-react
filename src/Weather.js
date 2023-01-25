import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.city);
  let [cityWeather, setCityWeather] = useState({});
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurthday",
    "Friday",
    "Saturday",
  ];
  //   let shortWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let monthes = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let now = new Date();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  function showWeather(response) {
    setCityWeather({
      city: response.data.city,
      description: response.data.condition.description,
      temperature: Math.round(response.data.temperature.current),
      like: Math.round(response.data.temperature.feels_like),
      pressure: response.data.temperature.pressure,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      imgUrl: response.data.condition.icon_url,
    });
  }

  let apiKey = "3te112f50837749e5bfeo6adf636e68f";

  function displayForecast(response) {
    let forecast = response.data.daily;
    console.log(forecast);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiNewUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiNewUrl).then(showWeather);
  }
  function userCity(event) {
    setCity(event.target.value);
  }

  useEffect(() => {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    let forecastWeather = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    axios.get(forecastWeather).then(displayForecast);
  });

  return (
    <div className="Weather" onLoad={handleSubmit}>
      <div className="contenier Weather">
        <div className="card">
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
                      onChange={userCity}
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
            <div className="row today g-1">
              <div className="col-5">
                <h1>{cityWeather.city}</h1>
                <ul className="day">
                  <li>
                    {now.getDate()} {monthes[now.getMonth()]},{" "}
                    {week[now.getDay()]} {hours}:{minutes}
                  </li>
                  <li>{cityWeather.description}</li>
                </ul>
              </div>
              <div className="col-3 align-self-center">
                <h2 className="temper">
                  <img src={cityWeather.imgUrl} alt="" width="75" />
                  <span>{cityWeather.temperature}</span>
                  <span className="units">
                    <a href="/">°C</a> |
                    <a href="/" className="degree">
                      °F
                    </a>
                  </span>
                </h2>
              </div>
              <div className="col-2 details vertical">
                <ul className="data">
                  <li className="impotant">Feels like</li>
                  <li>{cityWeather.like}º</li>
                  <li className="impotant">Pressure</li>
                  <li>{cityWeather.humidity} hPa</li>
                </ul>
              </div>
              <div className="col-2 details">
                <ul className="data">
                  <li className="impotant">Humidity</li>
                  <li>73%</li>

                  <li className="impotant">Wind</li>
                  <li>{cityWeather.wind} km/h</li>
                </ul>
              </div>
            </div>
            <div className="week" id="forecast"></div>
          </div>

          <p className="coder">
            <a
              href="https://github.com/KettySalt/kettyua-weatherapp"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by Kateryna Gavryliuk
          </p>
        </div>
      </div>
    </div>
  );
}
