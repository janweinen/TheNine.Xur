import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
};

export default Body;
