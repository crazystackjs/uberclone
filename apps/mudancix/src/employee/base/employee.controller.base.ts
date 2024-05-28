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
import { EmployeeService } from "../employee.service";
import { EmployeeCreateInput } from "./EmployeeCreateInput";
import { Employee } from "./Employee";
import { EmployeeFindManyArgs } from "./EmployeeFindManyArgs";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeUpdateInput } from "./EmployeeUpdateInput";
import { MoveEmployeeFindManyArgs } from "../../moveEmployee/base/MoveEmployeeFindManyArgs";
import { MoveEmployee } from "../../moveEmployee/base/MoveEmployee";
import { MoveEmployeeWhereUniqueInput } from "../../moveEmployee/base/MoveEmployeeWhereUniqueInput";

export class EmployeeControllerBase {
  constructor(protected readonly service: EmployeeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Employee })
  async createEmployee(
    @common.Body() data: EmployeeCreateInput
  ): Promise<Employee> {
    return await this.service.createEmployee({
      data: data,
      select: {
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phone: true,
        role: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Employee] })
  @ApiNestedQuery(EmployeeFindManyArgs)
  async employees(@common.Req() request: Request): Promise<Employee[]> {
    const args = plainToClass(EmployeeFindManyArgs, request.query);
    return this.service.employees({
      ...args,
      select: {
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phone: true,
        role: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async employee(
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Employee | null> {
    const result = await this.service.employee({
      where: params,
      select: {
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phone: true,
        role: true,
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
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEmployee(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() data: EmployeeUpdateInput
  ): Promise<Employee | null> {
    try {
      return await this.service.updateEmployee({
        where: params,
        data: data,
        select: {
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phone: true,
          role: true,
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
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEmployee(
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Employee | null> {
    try {
      return await this.service.deleteEmployee({
        where: params,
        select: {
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phone: true,
          role: true,
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
  @ApiNestedQuery(MoveEmployeeFindManyArgs)
  async findMoves(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<MoveEmployee[]> {
    const query = plainToClass(MoveEmployeeFindManyArgs, request.query);
    const results = await this.service.findMoves(params.id, {
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

  @common.Post("/:id/moves")
  async connectMoves(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: MoveEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      moves: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/moves")
  async updateMoves(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: MoveEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      moves: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/moves")
  async disconnectMoves(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: MoveEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      moves: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }
}
