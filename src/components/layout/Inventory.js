import React, { useState, useEffect } from "react";
import { Globals } from "../../Globals";
import { XurInventory } from "../FetchData";

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
    marginLeft: "1em",
    fontFamily: "sans-serif",
    color: "rgba(255,255,255,0.5)"
  },
  iconContainer: {
    marginLeft: "1em",
    marginRight: "1em",
    paddingTop: "0.5em",
    borderTop: "2px solid rgba(255,255,255,0.7)"
  },
  icon: {
    width: "60px",
    border: "1px solid rgba(255,255,255,0.5)",
    marginRight: "0.2em"
  }
};

const Inventory = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const d = await XurInventory();
      const types = props.type.split(",").map(x => {
        return parseInt(x, 10);
      });
      const filteredData = d.filter(item => {
        return types.some(type => {
          return type === item.itemType;
        });
      });
      setData(filteredData);
      setLoading(false);
    }
    fetchData();
  }, [props]);

  return (
    <div style={style.inventory}>
      <div style={style.topBar}>
        <span style={style.title}>{props.title}</span>
      </div>
      {loading ? (
        <div>...loading</div>
      ) : (
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
      )}
    </div>
  );
};

export default Inventory;
