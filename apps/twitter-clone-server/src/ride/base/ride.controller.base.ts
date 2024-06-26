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
import { RideService } from "../ride.service";
import { RideCreateInput } from "./RideCreateInput";
import { Ride } from "./Ride";
import { RideFindManyArgs } from "./RideFindManyArgs";
import { RideWhereUniqueInput } from "./RideWhereUniqueInput";
import { RideUpdateInput } from "./RideUpdateInput";

export class RideControllerBase {
  constructor(protected readonly service: RideService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Ride })
  async createRide(@common.Body() data: RideCreateInput): Promise<Ride> {
    return await this.service.createRide({
      data: {
        ...data,

        driver: data.driver
          ? {
              connect: data.driver,
            }
          : undefined,

        rider: data.rider
          ? {
              connect: data.rider,
            }
          : undefined,
      },
      select: {
        accepted: true,
        attemptedDrivers: true,
        baseFare: true,
        completedAt: true,
        createdAt: true,
        creditCardVerified: true,
        currentLocation: true,
        demandMultiplier: true,

        driver: {
          select: {
            id: true,
          },
        },

        dropoffLocation: true,
        endTime: true,
        fare: true,
        heatMapZone: true,
        id: true,
        paymentDetails: true,
        paymentStatus: true,
        perKmRate: true,
        pickupLocation: true,
        pricingType: true,
        radius: true,
        requestedAt: true,

        rider: {
          select: {
            id: true,
          },
        },

        serviceFee: true,
        startTime: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Ride] })
  @ApiNestedQuery(RideFindManyArgs)
  async rides(@common.Req() request: Request): Promise<Ride[]> {
    const args = plainToClass(RideFindManyArgs, request.query);
    return this.service.rides({
      ...args,
      select: {
        accepted: true,
        attemptedDrivers: true,
        baseFare: true,
        completedAt: true,
        createdAt: true,
        creditCardVerified: true,
        currentLocation: true,
        demandMultiplier: true,

        driver: {
          select: {
            id: true,
          },
        },

        dropoffLocation: true,
        endTime: true,
        fare: true,
        heatMapZone: true,
        id: true,
        paymentDetails: true,
        paymentStatus: true,
        perKmRate: true,
        pickupLocation: true,
        pricingType: true,
        radius: true,
        requestedAt: true,

        rider: {
          select: {
            id: true,
          },
        },

        serviceFee: true,
        startTime: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Ride })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ride(
    @common.Param() params: RideWhereUniqueInput
  ): Promise<Ride | null> {
    const result = await this.service.ride({
      where: params,
      select: {
        accepted: true,
        attemptedDrivers: true,
        baseFare: true,
        completedAt: true,
        createdAt: true,
        creditCardVerified: true,
        currentLocation: true,
        demandMultiplier: true,

        driver: {
          select: {
            id: true,
          },
        },

        dropoffLocation: true,
        endTime: true,
        fare: true,
        heatMapZone: true,
        id: true,
        paymentDetails: true,
        paymentStatus: true,
        perKmRate: true,
        pickupLocation: true,
        pricingType: true,
        radius: true,
        requestedAt: true,

        rider: {
          select: {
            id: true,
          },
        },

        serviceFee: true,
        startTime: true,
        status: true,
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
  @swagger.ApiOkResponse({ type: Ride })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRide(
    @common.Param() params: RideWhereUniqueInput,
    @common.Body() data: RideUpdateInput
  ): Promise<Ride | null> {
    try {
      return await this.service.updateRide({
        where: params,
        data: {
          ...data,

          driver: data.driver
            ? {
                connect: data.driver,
              }
            : undefined,

          rider: data.rider
            ? {
                connect: data.rider,
              }
            : undefined,
        },
        select: {
          accepted: true,
          attemptedDrivers: true,
          baseFare: true,
          completedAt: true,
          createdAt: true,
          creditCardVerified: true,
          currentLocation: true,
          demandMultiplier: true,

          driver: {
            select: {
              id: true,
            },
          },

          dropoffLocation: true,
          endTime: true,
          fare: true,
          heatMapZone: true,
          id: true,
          paymentDetails: true,
          paymentStatus: true,
          perKmRate: true,
          pickupLocation: true,
          pricingType: true,
          radius: true,
          requestedAt: true,

          rider: {
            select: {
              id: true,
            },
          },

          serviceFee: true,
          startTime: true,
          status: true,
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
  @swagger.ApiOkResponse({ type: Ride })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRide(
    @common.Param() params: RideWhereUniqueInput
  ): Promise<Ride | null> {
    try {
      return await this.service.deleteRide({
        where: params,
        select: {
          accepted: true,
          attemptedDrivers: true,
          baseFare: true,
          completedAt: true,
          createdAt: true,
          creditCardVerified: true,
          currentLocation: true,
          demandMultiplier: true,

          driver: {
            select: {
              id: true,
            },
          },

          dropoffLocation: true,
          endTime: true,
          fare: true,
          heatMapZone: true,
          id: true,
          paymentDetails: true,
          paymentStatus: true,
          perKmRate: true,
          pickupLocation: true,
          pricingType: true,
          radius: true,
          requestedAt: true,

          rider: {
            select: {
              id: true,
            },
          },

          serviceFee: true,
          startTime: true,
          status: true,
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
