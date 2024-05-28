import { FloatFilter } from "../../util/FloatFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { MoveListRelationFilter } from "../move/MoveListRelationFilter";

export type VehicleWhereInput = {
  capacityM3?: FloatFilter;
  id?: IntFilter;
  licensePlate?: StringFilter;
  make?: StringFilter;
  model?: StringFilter;
  moves?: MoveListRelationFilter;
};
