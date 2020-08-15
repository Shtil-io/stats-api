export interface Stat {
  deviceId: string;
  timestamp: number;
  radiation: string;
  temperature: string;
  nutrients: string;
  humidity: string;
}

export interface statsReq {
  deviceIds: number[];
  timestamp?: number;
}
