import React from "react";
export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}º`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}º`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let shortWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = shortWeek[date.getDay()];
    return day;
  }
  return (
    <div className="WeatherForecastDay">
      <div className="week-days">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.icon}
        width="60"
      />
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temperature-max">{maxTemp()}</span>
        <span className="weather-forecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
