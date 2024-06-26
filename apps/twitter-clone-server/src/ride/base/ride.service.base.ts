/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Ride as PrismaRide,
  Driver as PrismaDriver,
  Rider as PrismaRider,
} from "@prisma/client";

export class RideServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RideCountArgs, "select">): Promise<number> {
    return this.prisma.ride.count(args);
  }

  async rides<T extends Prisma.RideFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RideFindManyArgs>
  ): Promise<PrismaRide[]> {
    return this.prisma.ride.findMany<Prisma.RideFindManyArgs>(args);
  }
  async ride<T extends Prisma.RideFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RideFindUniqueArgs>
  ): Promise<PrismaRide | null> {
    return this.prisma.ride.findUnique(args);
  }
  async createRide<T extends Prisma.RideCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RideCreateArgs>
  ): Promise<PrismaRide> {
    return this.prisma.ride.create<T>(args);
  }
  async updateRide<T extends Prisma.RideUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RideUpdateArgs>
  ): Promise<PrismaRide> {
    return this.prisma.ride.update<T>(args);
  }
  async deleteRide<T extends Prisma.RideDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RideDeleteArgs>
  ): Promise<PrismaRide> {
    return this.prisma.ride.delete(args);
  }

  async getDriver(parentId: string): Promise<PrismaDriver | null> {
    return this.prisma.ride
      .findUnique({
        where: { id: parentId },
      })
      .driver();
  }

  async getRider(parentId: string): Promise<PrismaRider | null> {
    return this.prisma.ride
      .findUnique({
        where: { id: parentId },
      })
      .rider();
  }
}
