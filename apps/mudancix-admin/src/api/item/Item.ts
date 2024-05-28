import { Move } from "../move/Move";

export type Item = {
  description: string | null;
  id: number;
  move?: Move;
  name: string;
  photoUrl: string | null;
  volumeM3: number;
};
