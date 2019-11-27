import React from "react";
import Content from "./Content";
import Header from "./Header";

const Body = props => {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "sans-serif",
        backgroundImage: `url(${props.location})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Header />
      <Content />
    </div>
  );
};

export default Body;
