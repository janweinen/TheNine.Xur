import {
  getXurEndpoint,
  getManifest,
  getJSONWorldContentPaths
} from "../Bungie";

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

export const getPerk = async () => {
  const result = await getXurEndpoint();
  const manifest = await getManifest();
  const jsonWorldContentPaths = await getJSONWorldContentPaths(
    manifest.Response.jsonWorldContentPaths.en
  );
  const data = Object.values(result.Response.sales.data[2190858386].saleItems);
  let perks = null;
  const p = data.map(item => {
    const items =
      jsonWorldContentPaths.DestinyInventoryItemDefinition[item.itemHash];
    if ("sockets" in items) {
      perks = items.sockets.socketEntries.map(entries => {
        return jsonWorldContentPaths.DestinyInventoryItemDefinition[
          entries.singleInitialItemHash
        ];
      });
    } else {
      perks = "none";
    }
    return {
      name: items.displayProperties.name,
      icon: items.displayProperties.icon,
      itemTypeDisplayName: items.itemTypeDisplayName,
      tierTypeName: items.inventory.tierTypeName,
      screenshot: items.screenshot || "none",
      description: items.displayProperties.description,
      itemType: items.itemType,
      perks: perks
    };
  });
  return p;
};
