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
  Notification as PrismaNotification,
  Customer as PrismaCustomer,
} from "@prisma/client";

export class NotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.NotificationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.notification.count(args);
  }

  async notifications<T extends Prisma.NotificationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationFindManyArgs>
  ): Promise<PrismaNotification[]> {
    return this.prisma.notification.findMany<Prisma.NotificationFindManyArgs>(
      args
    );
  }
  async notification<T extends Prisma.NotificationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationFindUniqueArgs>
  ): Promise<PrismaNotification | null> {
    return this.prisma.notification.findUnique(args);
  }
  async createNotification<T extends Prisma.NotificationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationCreateArgs>
  ): Promise<PrismaNotification> {
    return this.prisma.notification.create<T>(args);
  }
  async updateNotification<T extends Prisma.NotificationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationUpdateArgs>
  ): Promise<PrismaNotification> {
    return this.prisma.notification.update<T>(args);
  }
  async deleteNotification<T extends Prisma.NotificationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationDeleteArgs>
  ): Promise<PrismaNotification> {
    return this.prisma.notification.delete(args);
  }

  async getCustomer(parentId: number): Promise<PrismaCustomer | null> {
    return this.prisma.notification
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }
}
