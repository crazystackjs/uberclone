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
import { CustomerService } from "../customer.service";
import { CustomerCreateInput } from "./CustomerCreateInput";
import { Customer } from "./Customer";
import { CustomerFindManyArgs } from "./CustomerFindManyArgs";
import { CustomerWhereUniqueInput } from "./CustomerWhereUniqueInput";
import { CustomerUpdateInput } from "./CustomerUpdateInput";
import { MoveFindManyArgs } from "../../move/base/MoveFindManyArgs";
import { Move } from "../../move/base/Move";
import { MoveWhereUniqueInput } from "../../move/base/MoveWhereUniqueInput";

export class CustomerControllerBase {
  constructor(protected readonly service: CustomerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Customer })
  async createCustomer(
    @common.Body() data: CustomerCreateInput
  ): Promise<Customer> {
    return await this.service.createCustomer({
      data: data,
      select: {
        address: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Customer] })
  @ApiNestedQuery(CustomerFindManyArgs)
  async customers(@common.Req() request: Request): Promise<Customer[]> {
    const args = plainToClass(CustomerFindManyArgs, request.query);
    return this.service.customers({
      ...args,
      select: {
        address: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async customer(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    const result = await this.service.customer({
      where: params,
      select: {
        address: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phoneNumber: true,
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
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCustomer(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() data: CustomerUpdateInput
  ): Promise<Customer | null> {
    try {
      return await this.service.updateCustomer({
        where: params,
        data: data,
        select: {
          address: true,
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phoneNumber: true,
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
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCustomer(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    try {
      return await this.service.deleteCustomer({
        where: params,
        select: {
          address: true,
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phoneNumber: true,
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

  @common.Get("/:id/moves")
  @ApiNestedQuery(MoveFindManyArgs)
  async findMoves(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Move[]> {
    const query = plainToClass(MoveFindManyArgs, request.query);
    const results = await this.service.findMoves(params.id, {
      ...query,
      select: {
        budget: {
          select: {
            id: true,
          },
        },

        completedAt: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        deliveryLocation: true,
        distance: true,

        driver: {
          select: {
            id: true,
          },
        },

        id: true,
        pickupLocation: true,
        price: true,

        route: {
          select: {
            id: true,
          },
        },

        scheduledAt: true,
        status: true,
        updatedAt: true,
        volume: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/moves")
  async connectMoves(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: MoveWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      moves: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/moves")
  async updateMoves(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: MoveWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      moves: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/moves")
  async disconnectMoves(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: MoveWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      moves: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }
}