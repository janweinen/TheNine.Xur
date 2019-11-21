import React from "react";
import Inventory from "./Inventory";

const style = {
  content: {
    padding: "2em"
  }
};

const Content = props => {
  return (
    <main style={style.content}>
      <Inventory data={props.data} title="EXOTIC GEAR" type="2,3" />
      <Inventory data={props.data} title="CONSUMABLES" type="9" />
      <Inventory data={props.data} title="INVITATIONS" type="0" />
    </main>
  );
};

export default Content;
