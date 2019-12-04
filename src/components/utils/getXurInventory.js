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
  let allPerks = [];
  let intrinsicPerk = [];
  const p = data.map(item => {
    const items =
      jsonWorldContentPaths.DestinyInventoryItemDefinition[item.itemHash];
    if ("sockets" in items) {
      allPerks = items.sockets.socketEntries.map(entries => {
        if (entries.socketTypeHash === parseInt("3956125808", 10)) {
          intrinsicPerk =
            jsonWorldContentPaths.DestinyInventoryItemDefinition[
              entries.singleInitialItemHash
            ];
        }
        return jsonWorldContentPaths.DestinyInventoryItemDefinition[
          entries.singleInitialItemHash
        ];
      });
    } else {
      allPerks = [];
    }
    return {
      name: items.displayProperties.name,
      icon: items.displayProperties.icon,
      itemTypeDisplayName: items.itemTypeDisplayName,
      tierTypeName: items.inventory.tierTypeName,
      screenshot: items.screenshot || "",
      description: items.displayProperties.description,
      itemType: items.itemType,
      intrinsicPerk: intrinsicPerk,
      allPerks: allPerks
    };
  });
  return p;
};
