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
import { DriverUpdateManyWithoutVehiclesInput } from "./DriverUpdateManyWithoutVehiclesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VehicleUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DriverUpdateManyWithoutVehiclesInput,
  })
  @ValidateNested()
  @Type(() => DriverUpdateManyWithoutVehiclesInput)
  @IsOptional()
  @Field(() => DriverUpdateManyWithoutVehiclesInput, {
    nullable: true,
  })
  driver?: DriverUpdateManyWithoutVehiclesInput;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  plateNumber?: string;
}

export { VehicleUpdateInput as VehicleUpdateInput };
