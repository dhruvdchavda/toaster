import React, { useContext } from "react";
import { toastContext } from "./toastProvider";

function Button() {
  const { setter } = useContext(toastContext);
  const handleClick = () => {
    setter("This is toast message.");
  };
  return (
    <div style={{ marginLeft: 80, display: "flex", alignItems: "center" }}>
      <h4>Child Three is button inside child two</h4>
      <button style={{ height: 40, marginLeft: 6 }} onClick={handleClick}>
        <b>Show Toast</b>
      </button>
    </div>
  );
}

export default Button;
