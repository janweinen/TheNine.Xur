export const itemTierTypeColor = itemTierType => {
  switch (itemTierType) {
    case "Legendary":
      return "#522f65";
    case "Exotic":
      return "#EDC01D";
    default:
      return "#c3bcb4";
  }
};
