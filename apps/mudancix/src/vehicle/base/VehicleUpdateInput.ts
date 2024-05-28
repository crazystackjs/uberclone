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
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { MoveUpdateManyWithoutVehiclesInput } from "./MoveUpdateManyWithoutVehiclesInput";
import { Type } from "class-transformer";

@InputType()
class VehicleUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  capacityM3?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  licensePlate?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  make?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  model?: string;

  @ApiProperty({
    required: false,
    type: () => MoveUpdateManyWithoutVehiclesInput,
  })
  @ValidateNested()
  @Type(() => MoveUpdateManyWithoutVehiclesInput)
  @IsOptional()
  @Field(() => MoveUpdateManyWithoutVehiclesInput, {
    nullable: true,
  })
  moves?: MoveUpdateManyWithoutVehiclesInput;
}

export { VehicleUpdateInput as VehicleUpdateInput };
