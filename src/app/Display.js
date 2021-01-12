import React from "react";
import "../index.css";
import "../App.css";

function Display(props) {
  const getDigit = (digit) => {
    //Display Clock digit or letter
    if (digit === ":") {
      return (
        <img
          alt="colon"
          src="assets/colon.png"
          width="10%"
          height="10%"
          style={
            props.sec % 2 === 0
              ? { backgroundColor: "white" }
              : { backgroundColor: "red" }
          }
        />
      );
    } else if (digit === " ") {
      return <h1> </h1>;
    } else if (digit === "A") {
      return (
        <h1 style={props.sec % 2 === 0 ? { color: "red" } : { color: "white" }}>
          AM
        </h1>
      );
    } else if (digit === "P") {
      return (
        <h1 style={props.sec % 2 === 0 ? { color: "red" } : { color: "white" }}>
          PM
        </h1>
      );
    } else if (digit === "M") {
      return null;
    } else {
      return (
        <img
          alt={`${digit}`}
          src={`assets/${digit}.png`}
          width="10%"
          height="10%"
        />
      );
    }
  };
  //Render JSX
  return (
    <div className="d-flex justify-content-center">
      {props.time.split("").map((value) => {
        return getDigit(value);
      })}
    </div>
  );
}

export default Display;
