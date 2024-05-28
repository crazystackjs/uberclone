import { MoveWhereInput } from "./MoveWhereInput";
import { MoveOrderByInput } from "./MoveOrderByInput";

export type MoveFindManyArgs = {
  where?: MoveWhereInput;
  orderBy?: Array<MoveOrderByInput>;
  skip?: number;
  take?: number;
};
