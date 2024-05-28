/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Chat } from "./Chat";
import { ChatCountArgs } from "./ChatCountArgs";
import { ChatFindManyArgs } from "./ChatFindManyArgs";
import { ChatFindUniqueArgs } from "./ChatFindUniqueArgs";
import { CreateChatArgs } from "./CreateChatArgs";
import { UpdateChatArgs } from "./UpdateChatArgs";
import { DeleteChatArgs } from "./DeleteChatArgs";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { Customer } from "../../customer/base/Customer";
import { Driver } from "../../driver/base/Driver";
import { ChatService } from "../chat.service";
@graphql.Resolver(() => Chat)
export class ChatResolverBase {
  constructor(protected readonly service: ChatService) {}

  async _chatsMeta(
    @graphql.Args() args: ChatCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Chat])
  async chats(@graphql.Args() args: ChatFindManyArgs): Promise<Chat[]> {
    return this.service.chats(args);
  }

  @graphql.Query(() => Chat, { nullable: true })
  async chat(@graphql.Args() args: ChatFindUniqueArgs): Promise<Chat | null> {
    const result = await this.service.chat(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Chat)
  async createChat(@graphql.Args() args: CreateChatArgs): Promise<Chat> {
    return await this.service.createChat({
      ...args,
      data: {
        ...args.data,

        customerMessenger: {
          connect: args.data.customerMessenger,
        },

        driverMessenger: {
          connect: args.data.driverMessenger,
        },
      },
    });
  }

  @graphql.Mutation(() => Chat)
  async updateChat(@graphql.Args() args: UpdateChatArgs): Promise<Chat | null> {
    try {
      return await this.service.updateChat({
        ...args,
        data: {
          ...args.data,

          customerMessenger: {
            connect: args.data.customerMessenger,
          },

          driverMessenger: {
            connect: args.data.driverMessenger,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Chat)
  async deleteChat(@graphql.Args() args: DeleteChatArgs): Promise<Chat | null> {
    try {
      return await this.service.deleteChat(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Message], { name: "messages" })
  async findMessages(
    @graphql.Parent() parent: Chat,
    @graphql.Args() args: MessageFindManyArgs
  ): Promise<Message[]> {
    const results = await this.service.findMessages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customerMessenger",
  })
  async getCustomerMessenger(
    @graphql.Parent() parent: Chat
  ): Promise<Customer | null> {
    const result = await this.service.getCustomerMessenger(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Driver, {
    nullable: true,
    name: "driverMessenger",
  })
  async getDriverMessenger(
    @graphql.Parent() parent: Chat
  ): Promise<Driver | null> {
    const result = await this.service.getDriverMessenger(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
