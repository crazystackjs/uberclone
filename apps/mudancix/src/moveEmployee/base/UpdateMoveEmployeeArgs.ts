/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MoveEmployeeWhereUniqueInput } from "./MoveEmployeeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MoveEmployeeUpdateInput } from "./MoveEmployeeUpdateInput";

@ArgsType()
class UpdateMoveEmployeeArgs {
  @ApiProperty({
    required: true,
    type: () => MoveEmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MoveEmployeeWhereUniqueInput)
  @Field(() => MoveEmployeeWhereUniqueInput, { nullable: false })
  where!: MoveEmployeeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MoveEmployeeUpdateInput,
  })
  @ValidateNested()
  @Type(() => MoveEmployeeUpdateInput)
  @Field(() => MoveEmployeeUpdateInput, { nullable: false })
  data!: MoveEmployeeUpdateInput;
}

export { UpdateMoveEmployeeArgs as UpdateMoveEmployeeArgs };