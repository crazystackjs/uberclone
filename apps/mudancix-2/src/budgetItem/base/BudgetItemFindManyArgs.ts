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
import { BudgetItemWhereInput } from "./BudgetItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BudgetItemOrderByInput } from "./BudgetItemOrderByInput";

@ArgsType()
class BudgetItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BudgetItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BudgetItemWhereInput, { nullable: true })
  @Type(() => BudgetItemWhereInput)
  where?: BudgetItemWhereInput;

  @ApiProperty({
    required: false,
    type: [BudgetItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BudgetItemOrderByInput], { nullable: true })
  @Type(() => BudgetItemOrderByInput)
  orderBy?: Array<BudgetItemOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BudgetItemFindManyArgs as BudgetItemFindManyArgs };
