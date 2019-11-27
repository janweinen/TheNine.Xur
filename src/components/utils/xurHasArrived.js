export const xurHasArrived = () => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  let xur = false;

  if (day === 5 && hour >= 18) {
    xur = true;
  } else if ([6, 0, 1].indexOf(day) !== -1) {
    xur = true;
  } else if (day === 2 && hour <= 18) {
    xur = true;
  }

  return xur;
};
