import { getXurEndpoint } from "../Bungie";

export const checkReset = async () => {
  const result = await getXurEndpoint();
  try {
    const nextRefreshDate =
      result.Response.vendors.data[2190858386].nextRefreshDate;
    return { done: true, nextRefreshDate: nextRefreshDate };
  } catch (error) {
    return { done: false, nextRefreshDate: "" };
  }
};
