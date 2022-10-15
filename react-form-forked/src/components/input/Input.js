import React from "react";
import "./input.css";
function Input({ type, placeHolder, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      onChange={onChange}
      className="input"
    />
  );
}
export default Input;
