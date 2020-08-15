import { SQSEvent } from "aws-lambda";
import "source-map-support/register";

import { connectToDB } from "../../modules/db";
import { addStats } from "../../modules/Stats";

const parseStats = (event: SQSEvent) =>
  JSON.parse(event.Records[0].body).responsePayload;

const consumeStats = async (event: SQSEvent) => {
  const stats = parseStats(event);

  await connectToDB();
  console.info("Handler.consumeStats - connected to mongoDB");

  await addStats(stats);
  console.info("Handler.consumeStats - stats insertion completed.");

  return;
};

export default consumeStats;
