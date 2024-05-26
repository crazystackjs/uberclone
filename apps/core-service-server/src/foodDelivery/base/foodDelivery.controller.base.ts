/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FoodDeliveryService } from "../foodDelivery.service";
import { FoodDeliveryCreateInput } from "./FoodDeliveryCreateInput";
import { FoodDelivery } from "./FoodDelivery";
import { Post } from "../../post/base/Post";
import { FoodDeliveryFindManyArgs } from "./FoodDeliveryFindManyArgs";
import { FoodDeliveryWhereUniqueInput } from "./FoodDeliveryWhereUniqueInput";
import { FoodDeliveryUpdateInput } from "./FoodDeliveryUpdateInput";

export class FoodDeliveryControllerBase {
  constructor(protected readonly service: FoodDeliveryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FoodDelivery })
  async createFoodDelivery(
    @common.Body() data: FoodDeliveryCreateInput
  ): Promise<FoodDelivery> {
    return await this.service.createFoodDelivery({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [FoodDelivery] })
  @ApiNestedQuery(FoodDeliveryFindManyArgs)
  async foodDeliveries(
    @common.Req() request: Request
  ): Promise<FoodDelivery[]> {
    const args = plainToClass(FoodDeliveryFindManyArgs, request.query);
    return this.service.foodDeliveries({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FoodDelivery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async foodDelivery(
    @common.Param() params: FoodDeliveryWhereUniqueInput
  ): Promise<FoodDelivery | null> {
    const result = await this.service.foodDelivery({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FoodDelivery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFoodDelivery(
    @common.Param() params: FoodDeliveryWhereUniqueInput,
    @common.Body() data: FoodDeliveryUpdateInput
  ): Promise<FoodDelivery | null> {
    try {
      return await this.service.updateFoodDelivery({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FoodDelivery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFoodDelivery(
    @common.Param() params: FoodDeliveryWhereUniqueInput
  ): Promise<FoodDelivery | null> {
    try {
      return await this.service.deleteFoodDelivery({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
