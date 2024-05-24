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
import { RiderService } from "../rider.service";
import { RiderCreateInput } from "./RiderCreateInput";
import { Rider } from "./Rider";
import { RiderFindManyArgs } from "./RiderFindManyArgs";
import { RiderWhereUniqueInput } from "./RiderWhereUniqueInput";
import { RiderUpdateInput } from "./RiderUpdateInput";
import { RideFindManyArgs } from "../../ride/base/RideFindManyArgs";
import { Ride } from "../../ride/base/Ride";
import { RideWhereUniqueInput } from "../../ride/base/RideWhereUniqueInput";

export class RiderControllerBase {
  constructor(protected readonly service: RiderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Rider })
  async createRider(@common.Body() data: RiderCreateInput): Promise<Rider> {
    return await this.service.createRider({
      data: data,
      select: {
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
  @swagger.ApiOkResponse({ type: [Rider] })
  @ApiNestedQuery(RiderFindManyArgs)
  async riders(@common.Req() request: Request): Promise<Rider[]> {
    const args = plainToClass(RiderFindManyArgs, request.query);
    return this.service.riders({
      ...args,
      select: {
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
  @swagger.ApiOkResponse({ type: Rider })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async rider(
    @common.Param() params: RiderWhereUniqueInput
  ): Promise<Rider | null> {
    const result = await this.service.rider({
      where: params,
      select: {
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
  @swagger.ApiOkResponse({ type: Rider })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRider(
    @common.Param() params: RiderWhereUniqueInput,
    @common.Body() data: RiderUpdateInput
  ): Promise<Rider | null> {
    try {
      return await this.service.updateRider({
        where: params,
        data: data,
        select: {
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
  @swagger.ApiOkResponse({ type: Rider })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRider(
    @common.Param() params: RiderWhereUniqueInput
  ): Promise<Rider | null> {
    try {
      return await this.service.deleteRider({
        where: params,
        select: {
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

  @common.Get("/:id/rides")
  @ApiNestedQuery(RideFindManyArgs)
  async findRides(
    @common.Req() request: Request,
    @common.Param() params: RiderWhereUniqueInput
  ): Promise<Ride[]> {
    const query = plainToClass(RideFindManyArgs, request.query);
    const results = await this.service.findRides(params.id, {
      ...query,
      select: {
        createdAt: true,

        driver: {
          select: {
            id: true,
          },
        },

        dropoffLocation: true,
        endTime: true,
        fare: true,
        id: true,
        pickupLocation: true,

        rider: {
          select: {
            id: true,
          },
        },

        startTime: true,
        status: true,
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

  @common.Post("/:id/rides")
  async connectRides(
    @common.Param() params: RiderWhereUniqueInput,
    @common.Body() body: RideWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rides: {
        connect: body,
      },
    };
    await this.service.updateRider({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/rides")
  async updateRides(
    @common.Param() params: RiderWhereUniqueInput,
    @common.Body() body: RideWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rides: {
        set: body,
      },
    };
    await this.service.updateRider({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/rides")
  async disconnectRides(
    @common.Param() params: RiderWhereUniqueInput,
    @common.Body() body: RideWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rides: {
        disconnect: body,
      },
    };
    await this.service.updateRider({
      where: params,
      data,
      select: { id: true },
    });
  }
}
