import React from "react";
export default function WeatherTemperature(props) {
  return (
    <span>
      <span>{props.celsius}</span>
      <span className="units">°C </span>
    </span>
  );
}
