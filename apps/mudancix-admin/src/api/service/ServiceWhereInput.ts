import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type ServiceWhereInput = {
  cost?: FloatFilter;
  description?: StringFilter;
  id?: IntFilter;
  name?: StringFilter;
};
