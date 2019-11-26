import React from "react";
/*
const calendarDay = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const resetOff = parseInt(calendarDay, 10) + 4;
const range = calendarDay + "-" + resetOff + "-" + month + "-" + year;
*/

export const HasXurArrived = () => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  let xur = "no";

  if (day === 5 && hour >= 18) {
    xur = "yes";
  } else if ([6, 0, 1].indexOf(day) !== -1) {
    xur = "yes";
  } else if (day === 2 && hour <= 18) {
    xur = "yes";
  }

  return <div>{xur}</div>;
};
