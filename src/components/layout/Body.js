import React from "react";
import Content from "./Content";
import Header from "./Header";
import { HasXurArrived } from "../helpers/hasXurArrived";

const Body = props => {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "sans-serif",
        backgroundImage: `url(${props.location})`,
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
