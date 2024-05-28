/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Employee } from "../../employee/base/Employee";
import { ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { Move } from "../../move/base/Move";

@ObjectType()
class MoveEmployee {
  @ApiProperty({
    required: true,
    type: () => Employee,
  })
  @ValidateNested()
  @Type(() => Employee)
  employee?: Employee;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: () => Move,
  })
  @ValidateNested()
  @Type(() => Move)
  move?: Move;
}

export { MoveEmployee as MoveEmployee };
