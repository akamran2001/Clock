import React from "react";
import "../index.css";
import "../App.css";

function Display(props) {
  const getDigit = (digit) => {
    //Display Clock digit or letter
    if (digit === ":") {
      return (
        <h1
          id="digits"
          style={props.sec % 2 === 0 ? { color: "white" } : { color: "red" }}
        >
          {digit}
        </h1>
      );
    } else if (digit === "A") {
      return (
        <h1
          id="period"
          style={props.sec % 2 === 0 ? { color: "red" } : { color: "white" }}
        >
          AM
        </h1>
      );
    } else if (digit === "P") {
      return (
        <h1
          id="period"
          style={props.sec % 2 === 0 ? { color: "red" } : { color: "white" }}
        >
          PM
        </h1>
      );
    } else if (digit === "M") {
      return null;
    } else {
      return <h1 id="digits">{digit}</h1>;
    }
  };
  //Render JSX
  return (
    <div className="d-flex justify-content-center clock-text">
      {props.time.split("").map((value) => {
        return getDigit(value);
      })}
    </div>
  );
}

export default Display;
