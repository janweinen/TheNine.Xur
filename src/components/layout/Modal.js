import React, { useState } from "react";
import { createPortal } from "react-dom";
import { getItemTierTypeColor } from "../utils/getItemTierTypeColor";

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
    header: {
      backgroundColor: "rgba(206, 173, 50, 1)",
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
    quote: {
      color: "rgba(255,255,255,0.7)",
      padding: "1.25rem 1.5rem",
      fontStyle: "italic",
      fontWeight: "lighter",
      borderBottom: "1px solid rgba(255,255,255,0.3)"
    },
    text: {
      color: "rgba(255,255,255,0.7)",
      padding: "1.25rem 1.5rem",
      fontWeight: "lighter"
    },
    intrinsicPerk: {
      color: "rgba(255,255,255,0.7)",
      padding: "1.25rem 1.5rem",
      fontWeight: "lighter",
      borderBottom: "1px solid rgba(255,255,255,0.3)",
      left: {
        display: "inline-block",
        width: "3em",
        verticalAlign: "top"
      },
      right: {
        display: "inline-block",
        width: "80%"
      },
      name: {
        display: "block",
        fontWeight: "bold"
      },
      icon: {
        width: "2em"
      }
    },
    link: {
      color: "#EDC01D"
    },
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
      paddingRight: "5px",
      WebkitAppearance: "none",
      background: "none",
      cursor: "pointer",
      zIndex: "100",
      padding: "0.1em 0.35em",
      fontFamily: "Arial",
      borderRadius: "1em",
      fontSize: "1.25em",
      border: "0"
    }
  }
};

const Modal = ({ activator, item }) => {
  const [show, setShow] = useState(false);
  const content = show && (
    <div style={style.overlay}>
      <div style={style.modal}>
        <button
          aria-label="Close Modal"
          style={style.modal.close}
          type="button"
          onClick={() => setShow(false)}
        >
          &times;
        </button>
        <div style={style.modal.body}>
          <div
            style={{
              backgroundColor: getItemTierTypeColor(item.tierTypeName),
              padding: "1.25rem 1.5rem",
              fontFamily: "sans-serif"
            }}
          >
            <div style={style.modal.header.name}>{item.name}</div>
            <div style={style.modal.header.type}>
              {item.itemTypeDisplayName}
            </div>
          </div>
          {!item.screenshot ? null : (
            <img
              style={style.modal.screenshot}
              src={item.screenshot}
              alt="screenshot"
            />
          )}
          <div>
            <p style={style.modal.quote}>{item.description}</p>
          </div>
          {!item.intrinsicPerk.icon ? null : (
            <div style={style.modal.intrinsicPerk}>
              <div style={style.modal.intrinsicPerk.left}>
                <img
                  style={style.modal.intrinsicPerk.icon}
                  src={item.intrinsicPerk.icon}
                  alt="intrinsicPerkIcon"
                />
              </div>
              <div style={style.modal.intrinsicPerk.right}>
                <span style={style.modal.intrinsicPerk.name}>
                  {item.intrinsicPerk.name}
                </span>
                <span>{item.intrinsicPerk.description}</span>
              </div>
            </div>
          )}
        </div>
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
