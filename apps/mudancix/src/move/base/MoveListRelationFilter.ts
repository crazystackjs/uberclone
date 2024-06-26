/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MoveWhereInput } from "./MoveWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MoveListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MoveWhereInput,
  })
  @ValidateNested()
  @Type(() => MoveWhereInput)
  @IsOptional()
  @Field(() => MoveWhereInput, {
    nullable: true,
  })
  every?: MoveWhereInput;

  @ApiProperty({
    required: false,
    type: () => MoveWhereInput,
  })
  @ValidateNested()
  @Type(() => MoveWhereInput)
  @IsOptional()
  @Field(() => MoveWhereInput, {
    nullable: true,
  })
  some?: MoveWhereInput;

  @ApiProperty({
    required: false,
    type: () => MoveWhereInput,
  })
  @ValidateNested()
  @Type(() => MoveWhereInput)
  @IsOptional()
  @Field(() => MoveWhereInput, {
    nullable: true,
  })
  none?: MoveWhereInput;
}
export { MoveListRelationFilter as MoveListRelationFilter };
