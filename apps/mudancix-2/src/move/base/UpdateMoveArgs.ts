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
import { MoveWhereUniqueInput } from "./MoveWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MoveUpdateInput } from "./MoveUpdateInput";

@ArgsType()
class UpdateMoveArgs {
  @ApiProperty({
    required: true,
    type: () => MoveWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MoveWhereUniqueInput)
  @Field(() => MoveWhereUniqueInput, { nullable: false })
  where!: MoveWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MoveUpdateInput,
  })
  @ValidateNested()
  @Type(() => MoveUpdateInput)
  @Field(() => MoveUpdateInput, { nullable: false })
  data!: MoveUpdateInput;
}

export { UpdateMoveArgs as UpdateMoveArgs };
