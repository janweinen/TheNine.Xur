export const timescale = nextRefreshDate => {
  const date = new Date(nextRefreshDate);
  const start = date.getDate() - 7;
  const end = start + 4;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const timeframe = start + "-" + end + "." + month + "." + year;
  return {
    timeframe: timeframe,
    countdown: null
  };
};
