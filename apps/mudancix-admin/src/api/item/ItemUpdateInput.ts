import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type ItemUpdateInput = {
  description?: string | null;
  move?: MoveWhereUniqueInput;
  name?: string;
  photoUrl?: string | null;
  volumeM3?: number;
};
