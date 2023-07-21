import React, { createContext } from "react";
import Toast from "./toast/toast";
import { useSelector } from "react-redux";

const toastContext = createContext();
const ToastProvider = ({ children }) => {
  const msg = useSelector((state) => state.changeMessage);
  return (
    <>
      <Toast msg={msg.message} />
      {children}
    </>
  );
};

export { toastContext, ToastProvider };
