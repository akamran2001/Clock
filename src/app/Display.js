import React from "react";
import "../index.css";
import "../App.css";
function Display(props) {
  const getDigit = (digit, index) => {
    //Display Clock digit or letter
    if (digit === ":") {
      return (
        <h1
          key={index}
          id="digits"
          style={props.sec % 2 === 0 ? { color: "white" } : { color: "red" }}
        >
          {digit}
        </h1>
      );
    } else if (digit === "A") {
      return (
        <h1
          key={index}
          id="period"
          style={props.sec % 2 === 0 ? { color: "red" } : { color: "white" }}
        >
          AM
        </h1>
      );
    } else if (digit === "P") {
      return (
        <h1
          key={index}
          id="period"
          style={props.sec % 2 === 0 ? { color: "red" } : { color: "white" }}
        >
          PM
        </h1>
      );
    } else if (digit === " ") {
      return (
        <h1 key={index} id="period">
          {" "}
        </h1>
      );
    } else if (digit === "M") {
      return null;
    } else {
      return (
        <h1 key={index} id="digits">
          {digit}
        </h1>
      );
    }
  };
  //Render JSX
  return (
    <div className="row">
      <div className="d-flex justify-content-center clock-text col" id="time">
        {props.time.split("").map((value, index) => {
          return getDigit(value, index);
        })}
      </div>
    </div>
  );
}

export default Display;
