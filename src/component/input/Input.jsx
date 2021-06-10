import React from "react";
import "./input.css";

const Input = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search Movies"
        autoComplete="off"
        value={props.val}
        onChange={props.event}
      />
    </>
  );
};

export default Input;
