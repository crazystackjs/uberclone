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
  Insurance as PrismaInsurance,
  Move as PrismaMove,
} from "@prisma/client";

export class InsuranceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.InsuranceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.insurance.count(args);
  }

  async insurances<T extends Prisma.InsuranceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InsuranceFindManyArgs>
  ): Promise<PrismaInsurance[]> {
    return this.prisma.insurance.findMany<Prisma.InsuranceFindManyArgs>(args);
  }
  async insurance<T extends Prisma.InsuranceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InsuranceFindUniqueArgs>
  ): Promise<PrismaInsurance | null> {
    return this.prisma.insurance.findUnique(args);
  }
  async createInsurance<T extends Prisma.InsuranceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InsuranceCreateArgs>
  ): Promise<PrismaInsurance> {
    return this.prisma.insurance.create<T>(args);
  }
  async updateInsurance<T extends Prisma.InsuranceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InsuranceUpdateArgs>
  ): Promise<PrismaInsurance> {
    return this.prisma.insurance.update<T>(args);
  }
  async deleteInsurance<T extends Prisma.InsuranceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InsuranceDeleteArgs>
  ): Promise<PrismaInsurance> {
    return this.prisma.insurance.delete(args);
  }

  async getMove(parentId: number): Promise<PrismaMove | null> {
    return this.prisma.insurance
      .findUnique({
        where: { id: parentId },
      })
      .move();
  }
}
