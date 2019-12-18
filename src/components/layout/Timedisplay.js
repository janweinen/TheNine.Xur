import React, { useContext } from "react";
import DataContext from "../Context";

const Timedisplay = () => {
  const context = useContext(DataContext);
  console.log(context.nextRefreshDate);
  const date = new Date(context.nextRefreshDate);
  const start = date.getDate() - 7;
  const end = start + 4;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const timeframe = start + "-" + end + "." + month + "." + year;
  return (
    <div>
      <span>{timeframe}</span>
    </div>
  );
};

export default Timedisplay;
