import React, { useState, useEffect, useContext } from "react";
import { Globals } from "../../Globals";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";
import DataContext from "../Context";

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
    letterSpacing: "0.1em",
    color: "rgba(255,255,255,0.5)"
  },
  iconContainer: {
    marginLeft: "1em",
    marginRight: "1em",
    paddingTop: "0.7em",
    borderTop: "2px solid rgba(255,255,255,0.7)"
  },
  icon: {
    width: "50px",
    border: "1px solid rgba(255,255,255,0.5)",
    marginRight: "0.2em"
  },
  arrow: {
    fill: "#ffffff",
    width: "1em",
    opacity: "0.5",
    marginLeft: "1em"
  }
};

const Inventory = props => {
  const inventory = useContext(DataContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    const types = props.type.split(",").map(x => {
      return parseInt(x, 10);
    });
    const filteredData = inventory.filter(item => {
      return types.some(type => {
        return type === item.itemType;
      });
    });
    setData(filteredData);
  }, [inventory, props.type]);

  return (
    <div style={style.inventory}>
      <div style={style.topBar}>
        <Arrow style={style.arrow} />
        <span style={style.title}>{props.title}</span>
      </div>
      <div style={style.iconContainer}>
        {data.map(item => (
          <img
            src={Globals.url.bungie + item.displayProperties.icon}
            alt="icon"
            key={item.hash}
            style={style.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
