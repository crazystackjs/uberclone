import { Module } from "@nestjs/common";
import { ContactModule } from "./contact/contact.module";
import { MessageModule } from "./message/message.module";
import { UserModule } from "./user/user.module";
import { ECommerceProgramModule } from "./eCommerceProgram/eCommerceProgram.module";
import { PaymentModule } from "./payment/payment.module";
import { RideBookingModule } from "./rideBooking/rideBooking.module";
import { HealthServiceModule } from "./healthService/healthService.module";
import { FoodDeliveryModule } from "./foodDelivery/foodDelivery.module";
import { PostModule } from "./post/post.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ContactModule,
    MessageModule,
    UserModule,
    ECommerceProgramModule,
    PaymentModule,
    RideBookingModule,
    HealthServiceModule,
    FoodDeliveryModule,
    PostModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
