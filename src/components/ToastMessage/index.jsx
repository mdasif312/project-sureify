import React, { useEffect, useState } from "react";
import "./ToastMessage.css";

import { useSelector } from "react-redux";

function ToastMessage() {
  const [show, setShow] = useState(false);
  let message = useSelector(state => state.showMessage);
  useEffect(() => {
    if (message.length <= 0) return;
    setShow(true);
    let timer = setTimeout(() => {
      setShow(false);
    }, 1000);
    return () => {
      timer = null;
    };
  }, [message]);
  return (
    <div className={`toast-message ${show ? "show" : ""}`}>
      {message.substring(0, message.length - 9)}
    </div>
  );
}

export default ToastMessage;
