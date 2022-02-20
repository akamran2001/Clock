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
            className="form-check-input switch"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={() => {
              set24(!is24);
            }}
          />
          <label className="custom-control-label" htmlFor="customSwitch1">
            <h5>{is24 ? "Military" : "Standard"}</h5>
          </label>
        </div>
      </div>
      <div className="row" style={{ fontFamily: "sans-serif" }}>
        <form
          className="d-flex justify-content-center"
          method="get"
          ngnoform=""
          action="https://www.google.com/search"
          autoComplete="off"
        >
          <input
            className="form-control"
            id="search-box"
            type="text"
            name="q"
            placeholder="Google"
          />
          <input
            type="submit"
            value="search"
            className="btn material-icons"
            id="searchButton"
          />
        </form>
      </div>

      <Display time={time} sec={getSec()} />
      <div className="row">
        <div className="d-flex justify-content-center text-info bg-dark date-text">
          <h1>{getDateString()}</h1>
        </div>
      </div>
      <Weather />
      <div className="row">
        <h6 style={{ fontFamily: "monospace" }}>
          Source code on my{" "}
          <a
            className="text-white"
            style={{ textDecoration: "none" }}
            href="https://github.com/akamran2001/Clock"
          >
            GitHub
          </a>
        </h6>
      </div>
    </div>
  );
}
