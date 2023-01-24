import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [cityWeather, setCityWeather] = useState({});

  function showWeather(response) {
    // alert(`In ${response.data.city} is ${response.data.temperature.current} ℃`);
    setCityWeather({
      city: response.data.city,
      day: "1 Jan, Sunday",
      description: response.data.condition.description,
      temperature: Math.round(response.data.temperature.current),
      like: Math.round(response.data.temperature.feels_like),
      pressure: response.data.temperature.pressure,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      imgUrl: response.data.condition.icon_url,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let apiKey = "3te112f50837749e5bfeo6adf636e68f";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(showWeather);
    } else {
      alert("Enter a city, please.");
    }
  }
  function userCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
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
                  <li>{cityWeather.day}</li>
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
