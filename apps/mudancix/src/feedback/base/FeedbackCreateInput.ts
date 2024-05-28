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
import { IsString, IsOptional, ValidateNested, IsInt } from "class-validator";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { Type } from "class-transformer";
import { MoveWhereUniqueInput } from "../../move/base/MoveWhereUniqueInput";

@InputType()
class FeedbackCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comments?: string | null;

  @ApiProperty({
    required: true,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @Field(() => CustomerWhereUniqueInput)
  customer!: CustomerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MoveWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MoveWhereUniqueInput)
  @Field(() => MoveWhereUniqueInput)
  move!: MoveWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  rating!: number;
}

export { FeedbackCreateInput as FeedbackCreateInput };
