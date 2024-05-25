import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RidePricingService } from "./ridepricing.service";
import { UpdateLocationInput } from "../ridePricing/UpdateLocationInput";

@swagger.ApiTags("ridePricings")
@common.Controller("ridePricings")
export class RidePricingController {
  constructor(protected readonly service: RidePricingService) {}

  @common.Post("/calculate-dynamic-price")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CalculateDynamicPrice(
    @common.Body()
    body: UpdateLocationInput
  ): Promise<string> {
        return this.service.CalculateDynamicPrice(body);
      }

  @common.Get("/:id/calculate-ride-price")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CalculateRidePrice(
    @common.Body()
    body: UpdateLocationInput
  ): Promise<string> {
        return this.service.CalculateRidePrice(body);
      }

  @common.Post("/complete-ride")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CompleteRide(
    @common.Body()
    body: UpdateLocationInput
  ): Promise<string> {
        return this.service.CompleteRide(body);
      }

  @common.Post("/request-ride")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RequestRide(
    @common.Body()
    body: UpdateLocationInput
  ): Promise<string> {
        return this.service.RequestRide(body);
      }

  @common.Post("/start-ride")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async StartRide(
    @common.Body()
    body: UpdateLocationInput
  ): Promise<string> {
        return this.service.StartRide(body);
      }

  @common.Post("/update-location")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateLocation(
    @common.Body()
    body: UpdateLocationInput
  ): Promise<string> {
        return this.service.UpdateLocation(body);
      }
}
