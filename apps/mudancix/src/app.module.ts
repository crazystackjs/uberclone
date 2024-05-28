import { Module } from "@nestjs/common";
import { CustomerModule } from "./customer/customer.module";
import { MoveModule } from "./move/move.module";
import { ItemModule } from "./item/item.module";
import { VehicleModule } from "./vehicle/vehicle.module";
import { EmployeeModule } from "./employee/employee.module";
import { MoveEmployeeModule } from "./moveEmployee/moveEmployee.module";
import { ServiceModule } from "./service/service.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { NotificationModule } from "./notification/notification.module";
import { PaymentModule } from "./payment/payment.module";
import { InsuranceModule } from "./insurance/insurance.module";
import { RouteModule } from "./route/route.module";
import { StorageModule } from "./storage/storage.module";
import { DiscountModule } from "./discount/discount.module";
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
    CustomerModule,
    MoveModule,
    ItemModule,
    VehicleModule,
    EmployeeModule,
    MoveEmployeeModule,
    ServiceModule,
    FeedbackModule,
    NotificationModule,
    PaymentModule,
    InsuranceModule,
    RouteModule,
    StorageModule,
    DiscountModule,
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
