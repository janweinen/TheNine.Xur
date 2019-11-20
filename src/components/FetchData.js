import {
  getXurInventory,
  getManifest,
  getJSONWorldContentPaths
} from "./Bungie";

export const XurInventory = async () => {
  const result = await getXurInventory();
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
