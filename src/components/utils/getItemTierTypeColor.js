export const getItemTierTypeColor = tierTypeName => {
  switch (tierTypeName) {
    case "Normal":
      return "#c3bcb4";
    case "Common":
      return "#366f42";
    case "Rare":
      return "#5076a3";
    case "Legendary":
      return "#522f65";
    case "Exotic":
      return "#EDC01D";
    default:
      return "#522f65";
  }
};
