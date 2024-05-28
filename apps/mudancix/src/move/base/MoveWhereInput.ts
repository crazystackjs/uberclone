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
import { FloatFilter } from "../../util/FloatFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { MoveEmployeeListRelationFilter } from "../../moveEmployee/base/MoveEmployeeListRelationFilter";
import { FeedbackWhereUniqueInput } from "../../feedback/base/FeedbackWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { InsuranceListRelationFilter } from "../../insurance/base/InsuranceListRelationFilter";
import { ItemListRelationFilter } from "../../item/base/ItemListRelationFilter";
import { PaymentListRelationFilter } from "../../payment/base/PaymentListRelationFilter";
import { RouteListRelationFilter } from "../../route/base/RouteListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StorageListRelationFilter } from "../../storage/base/StorageListRelationFilter";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";

@InputType()
class MoveWhereInput {
  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  costDistance?: FloatFilter;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  costVolume?: FloatFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  date?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  distanceKm?: FloatFilter;

  @ApiProperty({
    required: false,
    type: () => MoveEmployeeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MoveEmployeeListRelationFilter)
  @IsOptional()
  @Field(() => MoveEmployeeListRelationFilter, {
    nullable: true,
  })
  employees?: MoveEmployeeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => FeedbackWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FeedbackWhereUniqueInput)
  @IsOptional()
  @Field(() => FeedbackWhereUniqueInput, {
    nullable: true,
  })
  feedback?: FeedbackWhereUniqueInput;

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
    type: () => InsuranceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InsuranceListRelationFilter)
  @IsOptional()
  @Field(() => InsuranceListRelationFilter, {
    nullable: true,
  })
  insurance?: InsuranceListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ItemListRelationFilter)
  @IsOptional()
  @Field(() => ItemListRelationFilter, {
    nullable: true,
  })
  items?: ItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PaymentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PaymentListRelationFilter)
  @IsOptional()
  @Field(() => PaymentListRelationFilter, {
    nullable: true,
  })
  payment?: PaymentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RouteListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RouteListRelationFilter)
  @IsOptional()
  @Field(() => RouteListRelationFilter, {
    nullable: true,
  })
  route?: RouteListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  status?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => StorageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StorageListRelationFilter)
  @IsOptional()
  @Field(() => StorageListRelationFilter, {
    nullable: true,
  })
  storage?: StorageListRelationFilter;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  totalCost?: FloatFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => VehicleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereUniqueInput)
  @IsOptional()
  @Field(() => VehicleWhereUniqueInput, {
    nullable: true,
  })
  vehicle?: VehicleWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  volumeM3?: FloatFilter;
}

export { MoveWhereInput as MoveWhereInput };
