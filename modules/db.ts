import * as mongoose from "mongoose";
import { dbUser, dbPass, dbName } from "./env";

const MONGO_URI = `mongodb+srv://${dbUser}:${dbPass}@cluster0.nf1vi.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const CONNECTED = 1;
const CONNECTING = 2;

const isMongoConnected = () => {
  const {
    connection: { readyState },
  } = mongoose;
  return readyState === CONNECTED || readyState === CONNECTING;
};

export const connectToDB = async () => {
  if (!isMongoConnected())
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

  return;
};
