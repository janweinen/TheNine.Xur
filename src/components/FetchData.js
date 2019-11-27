import {
  getXurEndpoint,
  getManifest,
  getJSONWorldContentPaths
} from "./Bungie";

export const getXurInventory = async () => {
  const result = await getXurEndpoint();
  const manifest = await getManifest();
  const jsonWorldContentPaths = await getJSONWorldContentPaths(
    manifest.Response.jsonWorldContentPaths.en
  );
  const data = Object.values(
    result.Response.sales.data[2190858386].saleItems
  ).map(
    item => jsonWorldContentPaths.DestinyInventoryItemDefinition[item.itemHash]
  );
  return data;
};

export const checkReset = async () => {
  const result = await getXurEndpoint();
  try {
    const nextRefreshDate =
      result.Response.vendors.data[2190858386].nextRefreshDate;
    return [true, nextRefreshDate];
  } catch (error) {
    return [false, ""];
  }
};
