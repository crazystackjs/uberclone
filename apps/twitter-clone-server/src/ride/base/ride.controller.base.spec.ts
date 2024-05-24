import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { RideController } from "../ride.controller";
import { RideService } from "../ride.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accepted: "true",
  baseFare: 42.42,
  completedAt: new Date(),
  createdAt: new Date(),
  creditCardVerified: "true",
  demandMultiplier: 42.42,
  dropoffLocation: "exampleDropoffLocation",
  endTime: new Date(),
  fare: 42.42,
  heatMapZone: "exampleHeatMapZone",
  id: "exampleId",
  perKmRate: 42.42,
  pickupLocation: "examplePickupLocation",
  radius: 42.42,
  requestedAt: new Date(),
  serviceFee: 42.42,
  startTime: new Date(),
  status: "exampleStatus",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  accepted: "true",
  baseFare: 42.42,
  completedAt: new Date(),
  createdAt: new Date(),
  creditCardVerified: "true",
  demandMultiplier: 42.42,
  dropoffLocation: "exampleDropoffLocation",
  endTime: new Date(),
  fare: 42.42,
  heatMapZone: "exampleHeatMapZone",
  id: "exampleId",
  perKmRate: 42.42,
  pickupLocation: "examplePickupLocation",
  radius: 42.42,
  requestedAt: new Date(),
  serviceFee: 42.42,
  startTime: new Date(),
  status: "exampleStatus",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    accepted: "true",
    baseFare: 42.42,
    completedAt: new Date(),
    createdAt: new Date(),
    creditCardVerified: "true",
    demandMultiplier: 42.42,
    dropoffLocation: "exampleDropoffLocation",
    endTime: new Date(),
    fare: 42.42,
    heatMapZone: "exampleHeatMapZone",
    id: "exampleId",
    perKmRate: 42.42,
    pickupLocation: "examplePickupLocation",
    radius: 42.42,
    requestedAt: new Date(),
    serviceFee: 42.42,
    startTime: new Date(),
    status: "exampleStatus",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  accepted: "true",
  baseFare: 42.42,
  completedAt: new Date(),
  createdAt: new Date(),
  creditCardVerified: "true",
  demandMultiplier: 42.42,
  dropoffLocation: "exampleDropoffLocation",
  endTime: new Date(),
  fare: 42.42,
  heatMapZone: "exampleHeatMapZone",
  id: "exampleId",
  perKmRate: 42.42,
  pickupLocation: "examplePickupLocation",
  radius: 42.42,
  requestedAt: new Date(),
  serviceFee: 42.42,
  startTime: new Date(),
  status: "exampleStatus",
  updatedAt: new Date(),
};

const service = {
  createRide() {
    return CREATE_RESULT;
  },
  rides: () => FIND_MANY_RESULT,
  ride: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Ride", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RideService,
          useValue: service,
        },
      ],
      controllers: [RideController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /rides", async () => {
    await request(app.getHttpServer())
      .post("/rides")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completedAt: CREATE_RESULT.completedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
        requestedAt: CREATE_RESULT.requestedAt.toISOString(),
        startTime: CREATE_RESULT.startTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /rides", async () => {
    await request(app.getHttpServer())
      .get("/rides")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          completedAt: FIND_MANY_RESULT[0].completedAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          endTime: FIND_MANY_RESULT[0].endTime.toISOString(),
          requestedAt: FIND_MANY_RESULT[0].requestedAt.toISOString(),
          startTime: FIND_MANY_RESULT[0].startTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /rides/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rides"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /rides/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rides"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        completedAt: FIND_ONE_RESULT.completedAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        endTime: FIND_ONE_RESULT.endTime.toISOString(),
        requestedAt: FIND_ONE_RESULT.requestedAt.toISOString(),
        startTime: FIND_ONE_RESULT.startTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /rides existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/rides")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completedAt: CREATE_RESULT.completedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
        requestedAt: CREATE_RESULT.requestedAt.toISOString(),
        startTime: CREATE_RESULT.startTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/rides")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
