import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RideBookingServiceBase } from "./base/rideBooking.service.base";

@Injectable()
export class RideBookingService extends RideBookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
