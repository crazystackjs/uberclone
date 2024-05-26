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
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { OrderCreateNestedManyWithoutDeliveryAgentsInput } from "./OrderCreateNestedManyWithoutDeliveryAgentsInput";
import { Type } from "class-transformer";
import { EnumDeliveryAgentStatus } from "./EnumDeliveryAgentStatus";

@InputType()
class DeliveryAgentCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutDeliveryAgentsInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutDeliveryAgentsInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutDeliveryAgentsInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutDeliveryAgentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumDeliveryAgentStatus,
  })
  @IsEnum(EnumDeliveryAgentStatus)
  @IsOptional()
  @Field(() => EnumDeliveryAgentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { DeliveryAgentCreateInput as DeliveryAgentCreateInput };
