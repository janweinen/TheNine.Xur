import React from "react";
import { ImageBackground } from "react-native";
import Content from "./Content";
import Header from "./Header";
import img from "../../assets/images/edz_background.jpg";

const Body = props => {
  return (
    <div>
      <ImageBackground
        source={img}
        resizeMode={"cover"}
        style={{
          flex: 1,
          width: "100vw",
          height: "100vh"
        }}
      >
        <Header />
        <Content data={props.data} />
      </ImageBackground>
    </div>
  );
};

export default Body;
