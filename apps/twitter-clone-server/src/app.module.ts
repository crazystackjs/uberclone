import { Module } from "@nestjs/common";
import { TweetModule } from "./tweet/tweet.module";
import { UserModule } from "./user/user.module";
import { LikeModule } from "./like/like.module";
import { RetweetModule } from "./retweet/retweet.module";
import { FollowerModule } from "./follower/follower.module";
import { MessageModule } from "./message/message.module";
import { ChatRoomModule } from "./chatRoom/chatRoom.module";
import { DriverModule } from "./driver/driver.module";
import { RiderModule } from "./rider/rider.module";
import { RideModule } from "./ride/ride.module";
import { VehicleModule } from "./vehicle/vehicle.module";
import { HeatMapZoneModule } from "./heatMapZone/heatMapZone.module";
import { RidePricingModule } from "./RidePricing/ridepricing.module";
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
    TweetModule,
    UserModule,
    LikeModule,
    RetweetModule,
    FollowerModule,
    MessageModule,
    ChatRoomModule,
    DriverModule,
    RiderModule,
    RideModule,
    VehicleModule,
    HeatMapZoneModule,
    RidePricingModule,
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
