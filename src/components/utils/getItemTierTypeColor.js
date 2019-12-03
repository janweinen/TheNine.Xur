export const getItemTierTypeColor = tierTypeName => {
  switch (tierTypeName) {
    case "Legendary":
      return "#522f65";
    case "Exotic":
      return "#EDC01D";
    default:
      return "#522f65";
  }
};
