import React from "react";
import { ReactComponent as Logo } from "../../assets/images/xur_logo.svg";

const style = {
  header: {
    width: "100vw",
    borderBottom: "1px solid rgba(255,255,255,0.3)"
  },
  logo: {
    width: "150px",
    padding: "1em",
    fill: "#ffffff"
  }
};

const Header = () => {
  return (
    <header style={style.header}>
      <Logo style={style.logo} />
    </header>
  );
};

export default Header;
