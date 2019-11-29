import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Body from "./components/layout/Body";
import { getXurInventory } from "./components/utils/getXurInventory";
import { checkReset } from "./components/utils/checkReset";
import {
  firestoreRequest,
  firestoreSave,
  firestoreUpdate
} from "./components/Firebase";
import { DataProvider } from "./components/Context";
import { getBGImagePath } from "./components/utils/backgroundImage";

const App = () => {
  const [data, setData] = useState([]);
  const [bgImage, setbBgImage] = useState(null);
  const [message, setMessage] = useState("Loading...");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function init() {
      try {
        const reset = await checkReset();
        const xur = await firestoreRequest("vendors", "xur");
        const bgImagePath = await getBGImagePath(xur.location);
        console.log(reset);
        let nextRefreshDate = "";
        setbBgImage(bgImagePath);
        if (reset.done && reset.nextRefreshDate !== xur.nextRefreshDate) {
          nextRefreshDate = reset.nextRefreshDate;
          firestoreUpdate("vendors", "xur", {
            nextRefreshDate: nextRefreshDate
          });
          setMessage("Downloading data from Bungie...");
          const xurInventory = await getXurInventory();
          firestoreSave("inventories", "xur", {
            [nextRefreshDate]: xurInventory
          });
          setData(xurInventory);
        } else {
          nextRefreshDate = xur.nextRefreshDate;
          setMessage("Downloading data from Database...");
          const databaseInventory = await firestoreRequest(
            "inventories",
            "xur"
          );
          setData(databaseInventory[nextRefreshDate]);
        }

        //firestoreUpdate("vendors", "xur", {[nextRefreshDate]: databaseInventory.data});

        /*
        if (databaseInventory[nextRefreshDate] === undefined) {
          console.log("database entry does not exist!");
          const xurInventory = await getXurInventory();
          firestoreSave("inventories", "xur", {
            [nextRefreshDate]: xurInventory
          });
          //firestoreSave("inventories", nextRefreshDate, bungieInventory);
          setData(xurInventory);
        } else {
          console.log("database entry exists!");
          setData(databaseInventory[nextRefreshDate]);
        }
        */
        setLoading(false);
      } catch (error) {
        setMessage("Error: " + error);
      }
    }
    init();
  }, []);
  return (
    <DataProvider value={data}>
      {loading ? <div>{message}</div> : <Body location={bgImage} />}
    </DataProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
