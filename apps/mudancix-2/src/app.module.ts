import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { DriverModule } from "./driver/driver.module";
import { CustomerModule } from "./customer/customer.module";
import { MoveModule } from "./move/move.module";
import { VehicleModule } from "./vehicle/vehicle.module";
import { RatingModule } from "./rating/rating.module";
import { SupportTicketModule } from "./supportTicket/supportTicket.module";
import { CostSimulationModule } from "./costSimulation/costSimulation.module";
import { RouteModule } from "./route/route.module";
import { GpsDatumModule } from "./gpsDatum/gpsDatum.module";
import { BudgetModule } from "./budget/budget.module";
import { BudgetItemModule } from "./budgetItem/budgetItem.module";
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
    UserModule,
    DriverModule,
    CustomerModule,
    MoveModule,
    VehicleModule,
    RatingModule,
    SupportTicketModule,
    CostSimulationModule,
    RouteModule,
    GpsDatumModule,
    BudgetModule,
    BudgetItemModule,
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
