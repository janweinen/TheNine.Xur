import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Body from "./components/layout/Body";
import { xurData, getNextRefreshDate } from "./components/FetchData";
import {
  firestoreRequest,
  firestoreSave,
  firestoreUpdate
} from "./components/Firebase";
import { DataProvider } from "./components/Context";
import { getBGImagePath } from "./components/utils/backgroundImage";
import { xurHasArrived } from "./components/utils/xurHasArrived";

const App = () => {
  const [data, setData] = useState([]);
  const [bgImage, setbBgImage] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function init() {
      try {
        let nextRefreshDate = "";
        const xur = await firestoreRequest("vendors", "xur");
        if (xurHasArrived()) {
          nextRefreshDate = await getNextRefreshDate();
          firestoreUpdate("vendors", "xur", {
            nextRefreshDate: nextRefreshDate
          });
        } else {
          nextRefreshDate = xur.nextRefreshDate;
        }
        const databaseInventory = await firestoreRequest(
          "inventories",
          nextRefreshDate
        );
        const bgImagePath = await getBGImagePath(xur.location);
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
      } catch (error) {
        console.log(error);
      }
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
