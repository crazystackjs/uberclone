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
import { MoveService } from "../move.service";
import { MoveCreateInput } from "./MoveCreateInput";
import { Move } from "./Move";
import { MoveFindManyArgs } from "./MoveFindManyArgs";
import { MoveWhereUniqueInput } from "./MoveWhereUniqueInput";
import { MoveUpdateInput } from "./MoveUpdateInput";
import { MoveEmployeeFindManyArgs } from "../../moveEmployee/base/MoveEmployeeFindManyArgs";
import { MoveEmployee } from "../../moveEmployee/base/MoveEmployee";
import { MoveEmployeeWhereUniqueInput } from "../../moveEmployee/base/MoveEmployeeWhereUniqueInput";
import { InsuranceFindManyArgs } from "../../insurance/base/InsuranceFindManyArgs";
import { Insurance } from "../../insurance/base/Insurance";
import { InsuranceWhereUniqueInput } from "../../insurance/base/InsuranceWhereUniqueInput";
import { ItemFindManyArgs } from "../../item/base/ItemFindManyArgs";
import { Item } from "../../item/base/Item";
import { ItemWhereUniqueInput } from "../../item/base/ItemWhereUniqueInput";
import { PaymentFindManyArgs } from "../../payment/base/PaymentFindManyArgs";
import { Payment } from "../../payment/base/Payment";
import { PaymentWhereUniqueInput } from "../../payment/base/PaymentWhereUniqueInput";
import { RouteFindManyArgs } from "../../route/base/RouteFindManyArgs";
import { Route } from "../../route/base/Route";
import { RouteWhereUniqueInput } from "../../route/base/RouteWhereUniqueInput";
import { StorageFindManyArgs } from "../../storage/base/StorageFindManyArgs";
import { Storage } from "../../storage/base/Storage";
import { StorageWhereUniqueInput } from "../../storage/base/StorageWhereUniqueInput";

export class MoveControllerBase {
  constructor(protected readonly service: MoveService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Move })
  async createMove(@common.Body() data: MoveCreateInput): Promise<Move> {
    return await this.service.createMove({
      data: {
        ...data,

        customer: {
          connect: data.customer,
        },

        feedback: data.feedback
          ? {
              connect: data.feedback,
            }
          : undefined,

        vehicle: data.vehicle
          ? {
              connect: data.vehicle,
            }
          : undefined,
      },
      select: {
        costDistance: true,
        costVolume: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        date: true,
        distanceKm: true,

        feedback: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        totalCost: true,
        updatedAt: true,

        vehicle: {
          select: {
            id: true,
          },
        },

        volumeM3: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Move] })
  @ApiNestedQuery(MoveFindManyArgs)
  async moves(@common.Req() request: Request): Promise<Move[]> {
    const args = plainToClass(MoveFindManyArgs, request.query);
    return this.service.moves({
      ...args,
      select: {
        costDistance: true,
        costVolume: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        date: true,
        distanceKm: true,

        feedback: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        totalCost: true,
        updatedAt: true,

        vehicle: {
          select: {
            id: true,
          },
        },

        volumeM3: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Move })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async move(
    @common.Param() params: MoveWhereUniqueInput
  ): Promise<Move | null> {
    const result = await this.service.move({
      where: params,
      select: {
        costDistance: true,
        costVolume: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        date: true,
        distanceKm: true,

        feedback: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        totalCost: true,
        updatedAt: true,

        vehicle: {
          select: {
            id: true,
          },
        },

        volumeM3: true,
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
  @swagger.ApiOkResponse({ type: Move })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMove(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() data: MoveUpdateInput
  ): Promise<Move | null> {
    try {
      return await this.service.updateMove({
        where: params,
        data: {
          ...data,

          customer: {
            connect: data.customer,
          },

          feedback: data.feedback
            ? {
                connect: data.feedback,
              }
            : undefined,

          vehicle: data.vehicle
            ? {
                connect: data.vehicle,
              }
            : undefined,
        },
        select: {
          costDistance: true,
          costVolume: true,
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          date: true,
          distanceKm: true,

          feedback: {
            select: {
              id: true,
            },
          },

          id: true,
          status: true,
          totalCost: true,
          updatedAt: true,

          vehicle: {
            select: {
              id: true,
            },
          },

          volumeM3: true,
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
  @swagger.ApiOkResponse({ type: Move })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMove(
    @common.Param() params: MoveWhereUniqueInput
  ): Promise<Move | null> {
    try {
      return await this.service.deleteMove({
        where: params,
        select: {
          costDistance: true,
          costVolume: true,
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          date: true,
          distanceKm: true,

          feedback: {
            select: {
              id: true,
            },
          },

          id: true,
          status: true,
          totalCost: true,
          updatedAt: true,

          vehicle: {
            select: {
              id: true,
            },
          },

          volumeM3: true,
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

  @common.Get("/:id/employees")
  @ApiNestedQuery(MoveEmployeeFindManyArgs)
  async findEmployees(
    @common.Req() request: Request,
    @common.Param() params: MoveWhereUniqueInput
  ): Promise<MoveEmployee[]> {
    const query = plainToClass(MoveEmployeeFindManyArgs, request.query);
    const results = await this.service.findEmployees(params.id, {
      ...query,
      select: {
        employee: {
          select: {
            id: true,
          },
        },

        id: true,

        move: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/employees")
  async connectEmployees(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: MoveEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        connect: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/employees")
  async updateEmployees(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: MoveEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        set: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/employees")
  async disconnectEmployees(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: MoveEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        disconnect: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/insurance")
  @ApiNestedQuery(InsuranceFindManyArgs)
  async findInsurance(
    @common.Req() request: Request,
    @common.Param() params: MoveWhereUniqueInput
  ): Promise<Insurance[]> {
    const query = plainToClass(InsuranceFindManyArgs, request.query);
    const results = await this.service.findInsurance(params.id, {
      ...query,
      select: {
        cost: true,
        coverageAmount: true,
        id: true,

        move: {
          select: {
            id: true,
          },
        },

        policyNumber: true,
        provider: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/insurance")
  async connectInsurance(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: InsuranceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      insurance: {
        connect: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/insurance")
  async updateInsurance(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: InsuranceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      insurance: {
        set: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/insurance")
  async disconnectInsurance(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: InsuranceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      insurance: {
        disconnect: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/items")
  @ApiNestedQuery(ItemFindManyArgs)
  async findItems(
    @common.Req() request: Request,
    @common.Param() params: MoveWhereUniqueInput
  ): Promise<Item[]> {
    const query = plainToClass(ItemFindManyArgs, request.query);
    const results = await this.service.findItems(params.id, {
      ...query,
      select: {
        description: true,
        id: true,

        move: {
          select: {
            id: true,
          },
        },

        name: true,
        photoUrl: true,
        volumeM3: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/items")
  async connectItems(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        connect: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/items")
  async updateItems(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        set: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/items")
  async disconnectItems(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        disconnect: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/payment")
  @ApiNestedQuery(PaymentFindManyArgs)
  async findPayment(
    @common.Req() request: Request,
    @common.Param() params: MoveWhereUniqueInput
  ): Promise<Payment[]> {
    const query = plainToClass(PaymentFindManyArgs, request.query);
    const results = await this.service.findPayment(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        method: true,

        move: {
          select: {
            id: true,
          },
        },

        status: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/payment")
  async connectPayment(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payment: {
        connect: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/payment")
  async updatePayment(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payment: {
        set: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/payment")
  async disconnectPayment(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payment: {
        disconnect: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/route")
  @ApiNestedQuery(RouteFindManyArgs)
  async findRoute(
    @common.Req() request: Request,
    @common.Param() params: MoveWhereUniqueInput
  ): Promise<Route[]> {
    const query = plainToClass(RouteFindManyArgs, request.query);
    const results = await this.service.findRoute(params.id, {
      ...query,
      select: {
        destination: true,
        estimatedTime: true,
        id: true,

        move: {
          select: {
            id: true,
          },
        },

        origin: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/route")
  async connectRoute(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: RouteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      route: {
        connect: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/route")
  async updateRoute(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: RouteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      route: {
        set: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/route")
  async disconnectRoute(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: RouteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      route: {
        disconnect: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/storage")
  @ApiNestedQuery(StorageFindManyArgs)
  async findStorage(
    @common.Req() request: Request,
    @common.Param() params: MoveWhereUniqueInput
  ): Promise<Storage[]> {
    const query = plainToClass(StorageFindManyArgs, request.query);
    const results = await this.service.findStorage(params.id, {
      ...query,
      select: {
        cost: true,
        endDate: true,
        id: true,
        location: true,

        move: {
          select: {
            id: true,
          },
        },

        startDate: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/storage")
  async connectStorage(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: StorageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      storage: {
        connect: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/storage")
  async updateStorage(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: StorageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      storage: {
        set: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/storage")
  async disconnectStorage(
    @common.Param() params: MoveWhereUniqueInput,
    @common.Body() body: StorageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      storage: {
        disconnect: body,
      },
    };
    await this.service.updateMove({
      where: params,
      data,
      select: { id: true },
    });
  }
}
