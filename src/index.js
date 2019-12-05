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
import Default from "./assets/images/Default.jpg";
import { getPerk } from "./components/utils/getXurInventory";

const style = {
  fontFamily: "sans-serif",
  minHeight: "100vh",
  width: "100vw",
  backgroundImage: `url(${Default})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  message: {
    color: "#000000",
    position: "absolute",
    width: "100%",
    textAlign: "center",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
};

const App = () => {
  const [data, setData] = useState([]);
  const [bgImage, setbBgImage] = useState(null);
  const [message, setMessage] = useState("LOADING");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function init() {
      try {
        const reset = await checkReset();
        const xur = await firestoreRequest("vendors", "xur");
        const bgImagePath = await getBGImagePath(xur.location);
        console.log(reset);
        //const test = await getPerk();
        //console.log(test);
        let nextRefreshDate = "";
        setbBgImage(bgImagePath);
        if (
          reset.done &&
          reset.nextRefreshDate !== xur.nextRefreshDate &&
          reset.inventoryLength > 2
        ) {
          nextRefreshDate = reset.nextRefreshDate;
          firestoreUpdate("vendors", "xur", {
            nextRefreshDate: nextRefreshDate
          });
          setMessage("DOWNLOADING FROM BUNGIE");
          const xurInventory = await getXurInventory();
          firestoreSave("inventories", "xur", {
            [nextRefreshDate]: xurInventory
          });
          setData(xurInventory);
        } else {
          nextRefreshDate = xur.nextRefreshDate;
          setMessage("DOWNLOADING FROM DATABASE");
          const databaseInventory = await firestoreRequest(
            "inventories",
            "xur"
          );
          setData(databaseInventory[nextRefreshDate]);
        }
        setLoading(false);
      } catch (error) {
        setMessage("Error: " + error);
      }
    }
    init();
  }, []);
  return (
    <DataProvider value={data}>
      {loading ? (
        <div style={style}>
          <div style={style.message}>{message}</div>
        </div>
      ) : (
        <Body location={bgImage} />
      )}
    </DataProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
