import { Move } from "../move/Move";

export type Route = {
  destination: string;
  estimatedTime: number;
  id: number;
  move?: Move;
  origin: string;
};
