import consumeStats from "./functions/consumeStats";

const responsePayload = [
  {
    deviceId: 0,
    timestamp: "1597506834543",
    radiation: 0,
    temperature: 0,
    nutrients: 3,
    humidity: 5,
  },
];

const event = { Records: [{ body: JSON.stringify({ responsePayload }) }] };

consumeStats(event as any);
