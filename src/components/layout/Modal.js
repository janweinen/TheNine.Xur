import React, { useState } from "react";
import { createPortal } from "react-dom";

const style = {
  overlay: {
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "98",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modal: {
    fontFamily: "sans-serif",
    position: "relative",
    zIndex: "99",
    width: "100%",
    height: "100%",
    maxWidth: "768px",
    margin: "0 auto",
    animation: "fadeIn 200ms",
    body: {
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(30,30,30,0.8)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)"
    },
    close: {
      position: "absolute",
      color: "white",
      top: "0",
      right: "0",
      padding: "5px",
      border: "0",
      WebkitAppearance: "none",
      background: "none",
      cursor: "pointer",
      zIndex: "100"
    }
  }
};

const Modal = ({ children, activator }) => {
  const [show, setShow] = useState(false);
  const content = show && (
    <div style={style.overlay}>
      <div style={style.modal}>
        <button
          style={style.modal.close}
          type="button"
          onClick={() => setShow(false)}
        >
          X
        </button>
        <div style={style.modal.body}>{children}</div>
      </div>
    </div>
  );

  return (
    <>
      {activator({ setShow })}
      {createPortal(content, document.body)}
    </>
  );
};

export default Modal;
