import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="row today g-1">
      <div className="col-5">
        <h1>{props.data.city}</h1>
        <ul className="day">
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="col-3 align-self-center">
        <h2 className="temper">
          <img
            src={props.data.imgUrl}
            alt={props.data.description}
            width="75"
          />
          <WeatherTemperature celsius={props.data.temperature} />
        </h2>
      </div>
      <div className="col-2 details vertical">
        <ul className="data">
          <li className="impotant">Feels like</li>
          <li>{props.data.like}º</li>
          <li className="impotant">Pressure</li>
          <li>{props.data.pressure} hPa</li>
        </ul>
      </div>
      <div className="col-2 details">
        <ul className="data">
          <li className="impotant">Humidity</li>
          <li>{props.data.humidity}%</li>

          <li className="impotant">Wind</li>
          <li>{props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
