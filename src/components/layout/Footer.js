import React from "react";
import Modal from "./Modal";

const style = {
  footer: {
    width: "100%",
    height: "3em",
    position: "fixed",
    bottom: "0",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    backgroundColor: "rgba(0,0,0,0.5)",
    lineHeight: "3em",
    color: "rgba(255,255,255,0.5)",
    textAlign: "right"
  },
  title: {
    marginLeft: "0.5em",
    color: "rgba(255,255,255,0.5)"
  },
  icon: {
    padding: "0.1em 0.35em",
    fontFamily: "Arial",
    borderRadius: "0.2em",
    backgroundColor: "rgba(0,0,0,0.5)",
    border: "1px solid rgba(255,255,255,0.8)"
  },
  about: {
    marginRight: "2em"
  }
};

const Footer = () => {
  return (
    <footer style={style.footer}>
      <Modal
        activator={({ setShow }) => (
          <div style={style.about} onClick={() => setShow(true)}>
            <span style={style.icon}>A</span>
            <span style={style.title}>ABOUT</span>
          </div>
        )}
      >
        This is inside the modal!
      </Modal>
    </footer>
  );
};

export default Footer;
