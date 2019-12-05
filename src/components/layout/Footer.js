import React from "react";
import Modal from "./Modal";
import Hunter from "../../assets/images/Hunter.jpg";

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
    textAlign: "right",
    cursor: "pointer"
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
  },
  modal: {
    header: {
      backgroundColor: "#522f65",
      padding: "1.25rem 1.5rem",
      fontFamily: "sans-serif",
      name: {
        color: "rgba(255,255,255,1)",
        fontSize: "2em"
      },
      type: {
        color: "rgba(255,255,255,0.7)",
        fontSize: "1em"
      }
    },
    screenshot: {
      width: "100%"
    },
    text: {
      color: "rgba(255,255,255,0.7)",
      padding: "1.25rem 1.5rem",
      fontWeight: "lighter"
    },
    quote: {
      color: "rgba(255,255,255,0.7)",
      padding: "1.25rem 1.5rem",
      fontStyle: "italic",
      fontWeight: "lighter",
      borderBottom: "1px solid rgba(255,255,255,0.3)"
    }
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
        <div style={style.modal.header}>
          <div style={style.modal.header.name}>Jan Weinen</div>
          <div style={style.modal.header.type}>Web Developer and Hunter Main</div>
        </div>
        <img style={style.modal.screenshot} src={Hunter} alt="screenshot" />
        <div>
          <p style={style.modal.quote}>Per Audacia Ad Astra!</p>
          <p style={style.modal.text}>
            This website is developed by{" "}
            <a href="https://twitter.com/JanWeinen">@janweinen</a>, WebDeveloper
            from Cologne working in online advertising. I started this as a
            passion project to teach myself React and state of the art
            ECMAScript.
            <br />
            <br />
            The website pulls data from Bungies Destiny 2 API and will remain in
            a continous progression, meaning that I will update it regularly
            with new features. Currently is it showing Xûrs weekly Inventory
            which updates every Friday.
          </p>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
