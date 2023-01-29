import React from "react";
export default function FormattedDate(props) {
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
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {" "}
      {props.date.getDate()} {months[props.date.getMonth()]},{" "}
      {week[props.date.getDay()]} {hours}:{minutes}
    </div>
  );
}
