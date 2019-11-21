import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Body from "./components/layout/Body";
import { XurInventory } from "./components/FetchData";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function doWork() {
      const test = await XurInventory();
      setData(test);
      setLoading(false);
    }
    doWork();
  }, []);
  return <div>{loading ? <div>...loading</div> : <Body data={data} />}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
