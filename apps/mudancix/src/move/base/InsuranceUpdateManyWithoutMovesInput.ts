/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { InsuranceWhereUniqueInput } from "../../insurance/base/InsuranceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class InsuranceUpdateManyWithoutMovesInput {
  @Field(() => [InsuranceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InsuranceWhereUniqueInput],
  })
  connect?: Array<InsuranceWhereUniqueInput>;

  @Field(() => [InsuranceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InsuranceWhereUniqueInput],
  })
  disconnect?: Array<InsuranceWhereUniqueInput>;

  @Field(() => [InsuranceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InsuranceWhereUniqueInput],
  })
  set?: Array<InsuranceWhereUniqueInput>;
}

export { InsuranceUpdateManyWithoutMovesInput as InsuranceUpdateManyWithoutMovesInput };
