import React from "react";
import Content from "./Content";
import Header from "./Header";
import Earth from "../../assets/images/Earth.jpg";
import Nessus from "../../assets/images/Nessus.jpg";
import { HasXurArrived } from "../helpers/hasXurArrived";
/*
const style = {
  body: {
    minHeight: "100vh",
    fontFamily: "sans-serif",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "left",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
};
*/
const Body = props => {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "sans-serif",
        backgroundImage: `url(${Earth})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Header />
      <HasXurArrived />
      <Content />
    </div>
  );
};

export default Body;
