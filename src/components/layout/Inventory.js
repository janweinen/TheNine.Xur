import React, { useContext } from "react";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";
import DataContext from "../Context";
import Modal from "./Modal";

const style = {
  inventory: {
    width: "100%",
    marginBottom: "2em"
  },
  topBar: {
    width: "100%",
    height: "1.5em",
    lineHeight: "1.5em",
    backgroundColor: "rgba(255,255,255,0.3)"
  },
  title: {
    marginLeft: "0.5em",
    color: "rgba(255,255,255,0.5)"
  },
  iconContainer: {
    marginLeft: "1em",
    marginRight: "1em",
    paddingTop: "0.7em",
    borderTop: "2px solid rgba(255,255,255,0.7)"
  },
  icon: {
    width: "70px",
    border: "1px solid rgba(255,255,255,0.5)",
    marginRight: "0.3em",
    cursor: "pointer"
  },
  arrow: {
    fill: "#ffffff",
    width: "1em",
    opacity: "0.5",
    marginLeft: "1em"
  }
};

const Inventory = props => {
  const context = useContext(DataContext);
  const types = props.type.split(",").map(x => {
    return parseInt(x, 10);
  });
  const data = context.inventory.filter(item => {
    return types.some(type => {
      return type === item.itemType;
    });
  });
  return (
    <div style={style.inventory}>
      <div style={style.topBar}>
        <Arrow style={style.arrow} />
        <span style={style.title}>{props.title}</span>
      </div>
      <div style={style.iconContainer}>
        {data.map(item => (
          <Modal
            item={item}
            key={item.hash}
            activator={({ setShow }) => (
              <img
                src={item.icon}
                alt="icon"
                style={style.icon}
                onClick={() => setShow(true)}
              />
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
