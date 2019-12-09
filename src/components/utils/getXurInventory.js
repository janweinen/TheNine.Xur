import {
  getXurEndpoint,
  getManifest,
  getJSONWorldContentPaths
} from "../Bungie";
import { Globals } from "../Globals";

import { firestoreRequest, firestoreSave, firestoreUpdate } from "../Firebase";

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
        return jsonWorldContentPaths.DestinyInventoryItemDefinition[
          entries.singleInitialItemHash
        ];
      });
    } else {
      allPerks = [];
    }
    intrinsicPerk = allPerks.filter(function(key) {
      return key && key.itemTypeDisplayName === "Intrinsic";
    });
    return {
      hash: items.hash,
      name: items.displayProperties.name,
      icon: Globals.url.bungie + items.displayProperties.icon,
      itemTypeDisplayName: items.itemTypeDisplayName,
      tierTypeName: items.inventory.tierTypeName,
      screenshot:
        items.screenshot === undefined
          ? false
          : Globals.url.bungie + items.screenshot,
      description: items.displayProperties.description,
      itemType: items.itemType,
      intrinsicPerk:
        intrinsicPerk[0] === undefined
          ? false
          : intrinsicPerk[0].displayProperties,
      allPerks: false
    };
  });
  return p;
};
