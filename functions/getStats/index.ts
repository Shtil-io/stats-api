import { APIGatewayProxyHandler, APIGatewayProxyEvent } from "aws-lambda";
import "source-map-support/register";

import { connectToDB } from "../../modules/db";
import { getStatsByIds } from "../../modules/Stats";
import { statsReq } from "../../modules/types";

const parseEvent = (event: APIGatewayProxyEvent) => {
  let ids = [];
  const { deviceIds, timestamp } = event.queryStringParameters;

  try {
    ids = JSON.parse(deviceIds);
  } catch (err) {
    throw new Error("deviceIds missing or not an number array");
  }

  return { deviceIds: ids, timestamp: parseInt(timestamp) } as statsReq;
};

const getStats: APIGatewayProxyHandler = async (event, _context) => {
  const { deviceIds, timestamp } = parseEvent(event);

  await connectToDB();
  console.info("Handler.getStats - connected to mongoDB");

  const stats = await getStatsByIds(deviceIds, timestamp);
  console.info(`Handler.getStats - stats query ids completed`);

  return {
    statusCode: 200,
    body: JSON.stringify(stats),
  };
};

export default getStats;
