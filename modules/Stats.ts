import Stats from "./schema";
import { Stat } from "./types";

export const addStats = (stats: Stat[]) => Stats.collection.insertMany(stats);

export const getStatsByIds = async (deviceIds: number[], from?: number) => {
  let query: any = { deviceId: { $in: deviceIds } };
  query = from ? { ...query, timestamp: { $gt: from } } : query;

  const stats = await Stats.find(query);

  return stats;
};
