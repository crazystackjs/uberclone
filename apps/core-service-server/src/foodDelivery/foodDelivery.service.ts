import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FoodDeliveryServiceBase } from "./base/foodDelivery.service.base";

@Injectable()
export class FoodDeliveryService extends FoodDeliveryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
