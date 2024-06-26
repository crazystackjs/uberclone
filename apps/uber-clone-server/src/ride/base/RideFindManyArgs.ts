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
import { RideWhereInput } from "./RideWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RideOrderByInput } from "./RideOrderByInput";

@ArgsType()
class RideFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RideWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RideWhereInput, { nullable: true })
  @Type(() => RideWhereInput)
  where?: RideWhereInput;

  @ApiProperty({
    required: false,
    type: [RideOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RideOrderByInput], { nullable: true })
  @Type(() => RideOrderByInput)
  orderBy?: Array<RideOrderByInput>;

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

export { RideFindManyArgs as RideFindManyArgs };
