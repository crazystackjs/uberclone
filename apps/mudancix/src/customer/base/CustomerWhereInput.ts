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
import { DiscountListRelationFilter } from "../../discount/base/DiscountListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { FeedbackListRelationFilter } from "../../feedback/base/FeedbackListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { MoveListRelationFilter } from "../../move/base/MoveListRelationFilter";
import { NotificationListRelationFilter } from "../../notification/base/NotificationListRelationFilter";

@InputType()
class CustomerWhereInput {
  @ApiProperty({
    required: false,
    type: () => DiscountListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DiscountListRelationFilter)
  @IsOptional()
  @Field(() => DiscountListRelationFilter, {
    nullable: true,
  })
  discount?: DiscountListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  email?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => FeedbackListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FeedbackListRelationFilter)
  @IsOptional()
  @Field(() => FeedbackListRelationFilter, {
    nullable: true,
  })
  feedbacks?: FeedbackListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  firstName?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  lastName?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => MoveListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MoveListRelationFilter)
  @IsOptional()
  @Field(() => MoveListRelationFilter, {
    nullable: true,
  })
  moves?: MoveListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => NotificationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => NotificationListRelationFilter)
  @IsOptional()
  @Field(() => NotificationListRelationFilter, {
    nullable: true,
  })
  notification?: NotificationListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  password?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  phone?: StringFilter;
}

export { CustomerWhereInput as CustomerWhereInput };
