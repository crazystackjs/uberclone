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
import { BudgetService } from "../budget.service";
import { BudgetCreateInput } from "./BudgetCreateInput";
import { Budget } from "./Budget";
import { BudgetFindManyArgs } from "./BudgetFindManyArgs";
import { BudgetWhereUniqueInput } from "./BudgetWhereUniqueInput";
import { BudgetUpdateInput } from "./BudgetUpdateInput";
import { BudgetItemFindManyArgs } from "../../budgetItem/base/BudgetItemFindManyArgs";
import { BudgetItem } from "../../budgetItem/base/BudgetItem";
import { BudgetItemWhereUniqueInput } from "../../budgetItem/base/BudgetItemWhereUniqueInput";

export class BudgetControllerBase {
  constructor(protected readonly service: BudgetService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Budget })
  async createBudget(@common.Body() data: BudgetCreateInput): Promise<Budget> {
    return await this.service.createBudget({
      data: {
        ...data,

        move: {
          connect: data.move,
        },
      },
      select: {
        createdAt: true,
        customerEmail: true,
        customerName: true,
        customerPhone: true,
        customerWhatsapp: true,
        destinationLocationType: true,
        exclusiveTruck: true,
        flexibleDate: true,
        hoisting: true,
        id: true,
        insurance: true,

        move: {
          select: {
            id: true,
          },
        },

        originLocationType: true,
        specialInstructions: true,
        termsAccepted: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Budget] })
  @ApiNestedQuery(BudgetFindManyArgs)
  async budgets(@common.Req() request: Request): Promise<Budget[]> {
    const args = plainToClass(BudgetFindManyArgs, request.query);
    return this.service.budgets({
      ...args,
      select: {
        createdAt: true,
        customerEmail: true,
        customerName: true,
        customerPhone: true,
        customerWhatsapp: true,
        destinationLocationType: true,
        exclusiveTruck: true,
        flexibleDate: true,
        hoisting: true,
        id: true,
        insurance: true,

        move: {
          select: {
            id: true,
          },
        },

        originLocationType: true,
        specialInstructions: true,
        termsAccepted: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Budget })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async budget(
    @common.Param() params: BudgetWhereUniqueInput
  ): Promise<Budget | null> {
    const result = await this.service.budget({
      where: params,
      select: {
        createdAt: true,
        customerEmail: true,
        customerName: true,
        customerPhone: true,
        customerWhatsapp: true,
        destinationLocationType: true,
        exclusiveTruck: true,
        flexibleDate: true,
        hoisting: true,
        id: true,
        insurance: true,

        move: {
          select: {
            id: true,
          },
        },

        originLocationType: true,
        specialInstructions: true,
        termsAccepted: true,
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
  @swagger.ApiOkResponse({ type: Budget })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBudget(
    @common.Param() params: BudgetWhereUniqueInput,
    @common.Body() data: BudgetUpdateInput
  ): Promise<Budget | null> {
    try {
      return await this.service.updateBudget({
        where: params,
        data: {
          ...data,

          move: {
            connect: data.move,
          },
        },
        select: {
          createdAt: true,
          customerEmail: true,
          customerName: true,
          customerPhone: true,
          customerWhatsapp: true,
          destinationLocationType: true,
          exclusiveTruck: true,
          flexibleDate: true,
          hoisting: true,
          id: true,
          insurance: true,

          move: {
            select: {
              id: true,
            },
          },

          originLocationType: true,
          specialInstructions: true,
          termsAccepted: true,
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
  @swagger.ApiOkResponse({ type: Budget })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBudget(
    @common.Param() params: BudgetWhereUniqueInput
  ): Promise<Budget | null> {
    try {
      return await this.service.deleteBudget({
        where: params,
        select: {
          createdAt: true,
          customerEmail: true,
          customerName: true,
          customerPhone: true,
          customerWhatsapp: true,
          destinationLocationType: true,
          exclusiveTruck: true,
          flexibleDate: true,
          hoisting: true,
          id: true,
          insurance: true,

          move: {
            select: {
              id: true,
            },
          },

          originLocationType: true,
          specialInstructions: true,
          termsAccepted: true,
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

  @common.Get("/:id/budgetItems")
  @ApiNestedQuery(BudgetItemFindManyArgs)
  async findBudgetItems(
    @common.Req() request: Request,
    @common.Param() params: BudgetWhereUniqueInput
  ): Promise<BudgetItem[]> {
    const query = plainToClass(BudgetItemFindManyArgs, request.query);
    const results = await this.service.findBudgetItems(params.id, {
      ...query,
      select: {
        additionalRequirements: true,

        budget: {
          select: {
            id: true,
          },
        },

        category: true,
        createdAt: true,
        id: true,
        itemName: true,
        needsPacking: true,
        needsTempControl: true,
        photoUrl: true,
        quantity: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/budgetItems")
  async connectBudgetItems(
    @common.Param() params: BudgetWhereUniqueInput,
    @common.Body() body: BudgetItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      budgetItems: {
        connect: body,
      },
    };
    await this.service.updateBudget({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/budgetItems")
  async updateBudgetItems(
    @common.Param() params: BudgetWhereUniqueInput,
    @common.Body() body: BudgetItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      budgetItems: {
        set: body,
      },
    };
    await this.service.updateBudget({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/budgetItems")
  async disconnectBudgetItems(
    @common.Param() params: BudgetWhereUniqueInput,
    @common.Body() body: BudgetItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      budgetItems: {
        disconnect: body,
      },
    };
    await this.service.updateBudget({
      where: params,
      data,
      select: { id: true },
    });
  }
}
