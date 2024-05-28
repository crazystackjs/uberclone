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
import { ChatWhereUniqueInput } from "../../chat/base/ChatWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumMessageSender } from "./EnumMessageSender";

@InputType()
class MessageUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ChatWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChatWhereUniqueInput)
  @IsOptional()
  @Field(() => ChatWhereUniqueInput, {
    nullable: true,
  })
  chat?: ChatWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string;

  @ApiProperty({
    required: false,
    enum: EnumMessageSender,
  })
  @IsEnum(EnumMessageSender)
  @IsOptional()
  @Field(() => EnumMessageSender, {
    nullable: true,
  })
  sender?: "CUSTOMER" | "DRIVER";
}

export { MessageUpdateInput as MessageUpdateInput };
