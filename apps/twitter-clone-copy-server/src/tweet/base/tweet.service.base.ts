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
  Tweet as PrismaTweet,
  Rating as PrismaRating,
} from "@prisma/client";

export class TweetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TweetCountArgs, "select">): Promise<number> {
    return this.prisma.tweet.count(args);
  }

  async tweets<T extends Prisma.TweetFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TweetFindManyArgs>
  ): Promise<PrismaTweet[]> {
    return this.prisma.tweet.findMany<Prisma.TweetFindManyArgs>(args);
  }
  async tweet<T extends Prisma.TweetFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TweetFindUniqueArgs>
  ): Promise<PrismaTweet | null> {
    return this.prisma.tweet.findUnique(args);
  }
  async createTweet<T extends Prisma.TweetCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TweetCreateArgs>
  ): Promise<PrismaTweet> {
    return this.prisma.tweet.create<T>(args);
  }
  async updateTweet<T extends Prisma.TweetUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TweetUpdateArgs>
  ): Promise<PrismaTweet> {
    return this.prisma.tweet.update<T>(args);
  }
  async deleteTweet<T extends Prisma.TweetDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TweetDeleteArgs>
  ): Promise<PrismaTweet> {
    return this.prisma.tweet.delete(args);
  }

  async findRatings(
    parentId: string,
    args: Prisma.RatingFindManyArgs
  ): Promise<PrismaRating[]> {
    return this.prisma.tweet
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .ratings(args);
  }
}
