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
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn-grad"
            onClick={() => {
              set24(!is24);
            }}
          >
            {is24 ? "Toggle to 12hr" : "Toggle to 24hr"}
          </button>
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
        <div
          className="d-flex justify-content-center text-white"
          style={{ fontFamily: "monospace" }}
        >
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/akamran2001/Clock"
            className="btn-grad btn-credit"
          >
            Created by Ahmed Kamran
          </a>
        </div>
      </div>
    </div>
  );
}
