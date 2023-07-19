import React, { createContext, useState } from "react";
import Toast from "./toast/toast";

const toastContext = createContext();
const ToastProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const setter = (msg) => {
    console.log(msg);
    setMessage(msg);
  };

  const values = {
    message,
    setter,
  };
  return (
    <toastContext.Provider value={values}>
      <Toast msg={message} />
      {children}
    </toastContext.Provider>
  );
};

export { toastContext, ToastProvider };
