import React from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "./actions/index";

function Button() {
  // const { setter } = useContext(toastContext);
  // const handleClick = () => {
  //   setter("This is toast message.");
  // };
  const dispatch = useDispatch();
  return (
    <div style={{ marginLeft: 80, display: "flex", alignItems: "center" }}>
      <h4>Child Three is button inside child two</h4>
      <button
        style={{ height: 40, marginLeft: 6 }}
        onClick={() => dispatch(setMessage("This is toast message"))}
      >
        <b>Show Toast</b>
      </button>
    </div>
  );
}

export default Button;
