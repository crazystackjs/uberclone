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
import { ChatRoomWhereInput } from "./ChatRoomWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ChatRoomListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ChatRoomWhereInput,
  })
  @ValidateNested()
  @Type(() => ChatRoomWhereInput)
  @IsOptional()
  @Field(() => ChatRoomWhereInput, {
    nullable: true,
  })
  every?: ChatRoomWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChatRoomWhereInput,
  })
  @ValidateNested()
  @Type(() => ChatRoomWhereInput)
  @IsOptional()
  @Field(() => ChatRoomWhereInput, {
    nullable: true,
  })
  some?: ChatRoomWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChatRoomWhereInput,
  })
  @ValidateNested()
  @Type(() => ChatRoomWhereInput)
  @IsOptional()
  @Field(() => ChatRoomWhereInput, {
    nullable: true,
  })
  none?: ChatRoomWhereInput;
}
export { ChatRoomListRelationFilter as ChatRoomListRelationFilter };
