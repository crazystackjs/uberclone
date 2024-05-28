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
import { SupportTicketService } from "../supportTicket.service";
import { SupportTicketCreateInput } from "./SupportTicketCreateInput";
import { SupportTicket } from "./SupportTicket";
import { SupportTicketFindManyArgs } from "./SupportTicketFindManyArgs";
import { SupportTicketWhereUniqueInput } from "./SupportTicketWhereUniqueInput";
import { SupportTicketUpdateInput } from "./SupportTicketUpdateInput";

export class SupportTicketControllerBase {
  constructor(protected readonly service: SupportTicketService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SupportTicket })
  async createSupportTicket(
    @common.Body() data: SupportTicketCreateInput
  ): Promise<SupportTicket> {
    return await this.service.createSupportTicket({
      data: {
        ...data,

        user: {
          connect: data.user,
        },
      },
      select: {
        createdAt: true,
        id: true,
        issue: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SupportTicket] })
  @ApiNestedQuery(SupportTicketFindManyArgs)
  async supportTickets(
    @common.Req() request: Request
  ): Promise<SupportTicket[]> {
    const args = plainToClass(SupportTicketFindManyArgs, request.query);
    return this.service.supportTickets({
      ...args,
      select: {
        createdAt: true,
        id: true,
        issue: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SupportTicket })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async supportTicket(
    @common.Param() params: SupportTicketWhereUniqueInput
  ): Promise<SupportTicket | null> {
    const result = await this.service.supportTicket({
      where: params,
      select: {
        createdAt: true,
        id: true,
        issue: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: SupportTicket })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSupportTicket(
    @common.Param() params: SupportTicketWhereUniqueInput,
    @common.Body() data: SupportTicketUpdateInput
  ): Promise<SupportTicket | null> {
    try {
      return await this.service.updateSupportTicket({
        where: params,
        data: {
          ...data,

          user: {
            connect: data.user,
          },
        },
        select: {
          createdAt: true,
          id: true,
          issue: true,
          status: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: SupportTicket })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSupportTicket(
    @common.Param() params: SupportTicketWhereUniqueInput
  ): Promise<SupportTicket | null> {
    try {
      return await this.service.deleteSupportTicket({
        where: params,
        select: {
          createdAt: true,
          id: true,
          issue: true,
          status: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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