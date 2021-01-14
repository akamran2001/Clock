import React, { useState, useEffect } from "react";
import "../index.css";
import "../App.css";
import Display from "./Display";
import Weather from "./Weather";
export default function Clock() {
  //States and Functions
  const [is24, set24] = useState(false);
  const getTime = (is24) => {
    let date = new Date();
    let normal = `${
      date.getHours() <= 12 ? date.getHours() : date.getHours() - 12
    }:${date.getMinutes()}:${date.getSeconds()} ${
      date.getHours() < 12 ? "AM" : "PM"
    }`;
    let military = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    if (normal[0] === "0") {
      normal = "12" + normal.substring(1, normal.length);
    }
    while (normal.length < 11) {
      normal = normal + " ";
    }
    return `${is24 ? military : normal}`;
  };
  const getSec = () => {
    let date = new Date();
    return date.getSeconds();
  };
  const getDateString = () => {
    let date = new Date();
    return date.toDateString();
  };
  const [time, setTime] = useState(getTime(is24));
  //Side Effects
  useEffect(() => {
    set24(is24);
    const interval = setInterval(() => {
      setTime(getTime(is24));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [is24]);
  //Render JSX
  return (
    <div className="container">
      <div className="row">
        <div className="form-check form-switch d-flex justify-content-center">
          <input
            class="form-check-input switch"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={() => {
              set24(!is24);
            }}
          />
          <label class="custom-control-label" for="customSwitch1">
            <h5>{is24 ? "Military" : "Standard"}</h5>
          </label>
        </div>
      </div>

      <Display time={time} sec={getSec()} />

      <div className="row">
        <div className="d-flex justify-content-center text-info bg-dark date-text">
          <h1>{getDateString()}</h1>
        </div>
      </div>
      <Weather />
      <div className="row">
        <a
          className="text-white"
          style={{ textDecoration: "none" }}
          href="https://github.com/akamran2001/Clock"
        >
          <h7 style={{ fontFamily: "monospace" }}>Created by Ahmed Kamran</h7>
        </a>
      </div>
    </div>
  );
}
