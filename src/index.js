import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Body from "./components/layout/Body";
import { XurInventory } from "./components/FetchData";
import { firestoreRequest } from "./components/Firebase";
import { DataProvider } from "./components/Context";
import { getBGImagePath } from "./components/helpers/backgroundImage";

const App = () => {
  const [data, setData] = useState([]);
  const [bgImage, setbBgImage] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function init() {
      const inventory = await XurInventory();
      const location = await firestoreRequest("xur", "location");
      const bgImagePath = await getBGImagePath(location.data);
      setData(inventory);
      setbBgImage(bgImagePath);
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
