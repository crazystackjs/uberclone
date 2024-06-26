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
  Discount as PrismaDiscount,
  Customer as PrismaCustomer,
} from "@prisma/client";

export class DiscountServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DiscountCountArgs, "select">): Promise<number> {
    return this.prisma.discount.count(args);
  }

  async discounts<T extends Prisma.DiscountFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscountFindManyArgs>
  ): Promise<PrismaDiscount[]> {
    return this.prisma.discount.findMany<Prisma.DiscountFindManyArgs>(args);
  }
  async discount<T extends Prisma.DiscountFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscountFindUniqueArgs>
  ): Promise<PrismaDiscount | null> {
    return this.prisma.discount.findUnique(args);
  }
  async createDiscount<T extends Prisma.DiscountCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscountCreateArgs>
  ): Promise<PrismaDiscount> {
    return this.prisma.discount.create<T>(args);
  }
  async updateDiscount<T extends Prisma.DiscountUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscountUpdateArgs>
  ): Promise<PrismaDiscount> {
    return this.prisma.discount.update<T>(args);
  }
  async deleteDiscount<T extends Prisma.DiscountDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscountDeleteArgs>
  ): Promise<PrismaDiscount> {
    return this.prisma.discount.delete(args);
  }

  async getCustomer(parentId: number): Promise<PrismaCustomer | null> {
    return this.prisma.discount
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }
}
