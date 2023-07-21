import React, { useContext, useEffect, useState } from "react";
import "./toast.css";
import { toastContext } from "../toastProvider";
import { useDispatch } from "react-redux";
import { setMessage } from "../actions";

function Toast({ msg }) {
  // const { setter } = useContext(toastContext);
  const [show, setShow] = useState(false);
  console.log(msg);
  const dispatch = useDispatch();

  useEffect(() => {
    if (msg !== undefined && msg !== "") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        dispatch(setMessage(""));
      }, 3000);
    }
  }, [msg]);
  return (
    <>
      {show ? (
        <div className="toast toast-position">
          <p>{msg}</p>
        </div>
      ) : null}
    </>
  );
}

export default Toast;
