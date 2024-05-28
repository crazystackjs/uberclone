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
import { IsNumber, IsString, ValidateNested } from "class-validator";
import { MoveWhereUniqueInput } from "../../move/base/MoveWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class PaymentCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  amount!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  method!: string;

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
    type: String,
  })
  @IsString()
  @Field(() => String)
  status!: string;
}

export { PaymentCreateInput as PaymentCreateInput };
