import React from "react";
import Inventory from "./Inventory";
//import Timedisplay from "./Timedisplay";

const style = {
  content: {
    paddingTop: "3em",
    paddingLeft: "1em",
    paddingRight: "1em",
    paddingBottom: "1em"
  }
};

const Content = () => {
  return (
    <main style={style.content}>
      <Inventory title="EXOTIC GEAR" type="2,3" />
      <Inventory title="CONSUMABLES" type="9" />
      <Inventory title="INVITATIONS" type="0" />
    </main>
  );
};

export default Content;
