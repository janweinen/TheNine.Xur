import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Body from "./components/layout/Body";
import { xurData, getNextRefreshDate } from "./components/FetchData";
import { firestoreRequest, firestoreSave } from "./components/Firebase";
import { DataProvider } from "./components/Context";
import { getBGImagePath } from "./components/utils/backgroundImage";

const App = () => {
  const [data, setData] = useState([]);
  const [bgImage, setbBgImage] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function init() {
      const nextRefreshDate = await getNextRefreshDate();
      const databaseInventory = await firestoreRequest(
        "inventories",
        nextRefreshDate
      );
      const location = await firestoreRequest("xur", "location");
      const bgImagePath = await getBGImagePath(location.data);
      setbBgImage(bgImagePath);
      if (databaseInventory === undefined) {
        console.log("database entry does not exist!");
        const bungieInventory = await xurData();
        firestoreSave("inventories", nextRefreshDate, bungieInventory);
        setData(bungieInventory);
      } else {
        console.log("database entry exists!");
        setData(databaseInventory.data);
      }
      setLoading(false);
    }
    init();
  }, []);
  return (
    <DataProvider value={data}>
      {loading ? <div>...loading</div> : <Body location={bgImage} />}
    </DataProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
