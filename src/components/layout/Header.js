import React from "react";

const style = {
  header: {
    width: "100vw",
    color: "#ffffff",
    borderBottom: "1px solid rgba(255,255,255,0.3)"
  },
  logo: {
    padding: "2em",
    affinity: {
      color: "rgba(255,255,255,0.95)",
      fontSize: "0.7em",
      letterSpacing: "0.2em"
    },
    line: {
      fat: {
        border: "0",
        height: "6px",
        backgroundColor: "rgba(255,255,255,0.5)",
        width: "6.5em",
        marginTop: "0.2em",
        marginBottom: "0.2em",
        textAlign: "left"
      },
      thin: {
        border: "0",
        height: "2px",
        backgroundColor: "rgba(255,255,255,0.5)",
        width: "6.5em",
        marginTop: "0.2em",
        marginBottom: "0.5em",
        textAlign: "left"
      }
    },
    name: {
      color: "rgba(255,255,255,0.95)",
      fontSize: "3em",
      fontWeight: "bold",
      letterSpacing: "-0.05em"
    },
    description: {
      color: "rgba(255,255,255,0.6)",
      position: "relative"
    }
  }
};

const Header = () => {
  return (
    <header style={style.header}>
      <div style={style.logo}>
        <div style={style.logo.affinity}>THE NINE</div>
        <hr style={style.logo.line.fat} />
        <div style={style.logo.name}>XÛR</div>
        <hr style={style.logo.line.thin} />
        <div style={style.logo.description}>
          A peddler of strange curios, Xûr's motives are not his own. He bows to
          his distant masters, the Nine.
        </div>
      </div>
    </header>
  );
};

export default Header;
