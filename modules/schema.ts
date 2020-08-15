import * as mongoose from "mongoose";
import { Stat } from "./types";

const Schema = mongoose.Schema;

const schema = new Schema<Stat>({
  deviceId: Number,
  timestamp: String,
  radiation: String,
  temperature: String,
  nutrients: String,
  humidity: String,
  extra: { _id: false },
});

export default mongoose.model("stats", schema);
