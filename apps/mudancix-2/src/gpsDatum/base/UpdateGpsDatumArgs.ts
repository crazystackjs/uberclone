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
import { GpsDatumWhereUniqueInput } from "./GpsDatumWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GpsDatumUpdateInput } from "./GpsDatumUpdateInput";

@ArgsType()
class UpdateGpsDatumArgs {
  @ApiProperty({
    required: true,
    type: () => GpsDatumWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GpsDatumWhereUniqueInput)
  @Field(() => GpsDatumWhereUniqueInput, { nullable: false })
  where!: GpsDatumWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GpsDatumUpdateInput,
  })
  @ValidateNested()
  @Type(() => GpsDatumUpdateInput)
  @Field(() => GpsDatumUpdateInput, { nullable: false })
  data!: GpsDatumUpdateInput;
}

export { UpdateGpsDatumArgs as UpdateGpsDatumArgs };
