import React from "react";
import Modal from "./Modal";
import XurScreenshot from "../../assets/images/xur_screenshot.jpg";
import XurIcon from "../../assets/images/xur_icon.png";

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
  }
};

const Footer = () => {
  const item = {
    name: "Xûr",
    description:
      "A peddler of strange curios, Xûr's motives are not his own. He bows to his distant masters, the Nine.",
    screenshot: XurScreenshot,
    itemTypeDisplayName: "Agent of the Nine",
    tierTypeName: "Common",
    intrinsicPerk: {
      icon: XurIcon,
      description:
        "Xûr sells objects of legendary power. He accepts his own currency, in service of his own enigmatic goals - or those of equally cryptic masters. Mysterious, too, is the nature of his presence in the Tower. Does he have some arrangement with the Vanguard or the Speaker? Are there those among the Guardian elite who understand Xûr's nature and ultimate purpose? Or have all efforts to control his comings and goings simply failed?"
    }
  };
  return (
    <footer style={style.footer}>
      <Modal
        item={item}
        activator={({ setShow }) => (
          <div style={style.about} onClick={() => setShow(true)}>
            <span style={style.icon}>A</span>
            <span style={style.title}>ABOUT</span>
          </div>
        )}
      />
    </footer>
  );
};

export default Footer;
