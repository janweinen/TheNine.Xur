import { getXurEndpoint } from "../Bungie";

export const checkReset = async () => {
  const result = await getXurEndpoint();
  try {
    const nextRefreshDate =
      result.Response.vendors.data[2190858386].nextRefreshDate;
    const Inventory = Object.values(
      result.Response.sales.data[2190858386].saleItems
    );
    return {
      done: true,
      nextRefreshDate: nextRefreshDate,
      inventoryLength: Inventory.length
    };
  } catch (error) {
    return { done: false };
  }
};
