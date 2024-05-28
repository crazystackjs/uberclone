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
import { MoveController } from "../move.controller";
import { MoveService } from "../move.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  completedAt: new Date(),
  createdAt: new Date(),
  deliveryLocation: "exampleDeliveryLocation",
  distance: 42.42,
  id: "exampleId",
  pickupLocation: "examplePickupLocation",
  price: 42.42,
  scheduledAt: new Date(),
  updatedAt: new Date(),
  volume: 42.42,
};
const CREATE_RESULT = {
  completedAt: new Date(),
  createdAt: new Date(),
  deliveryLocation: "exampleDeliveryLocation",
  distance: 42.42,
  id: "exampleId",
  pickupLocation: "examplePickupLocation",
  price: 42.42,
  scheduledAt: new Date(),
  updatedAt: new Date(),
  volume: 42.42,
};
const FIND_MANY_RESULT = [
  {
    completedAt: new Date(),
    createdAt: new Date(),
    deliveryLocation: "exampleDeliveryLocation",
    distance: 42.42,
    id: "exampleId",
    pickupLocation: "examplePickupLocation",
    price: 42.42,
    scheduledAt: new Date(),
    updatedAt: new Date(),
    volume: 42.42,
  },
];
const FIND_ONE_RESULT = {
  completedAt: new Date(),
  createdAt: new Date(),
  deliveryLocation: "exampleDeliveryLocation",
  distance: 42.42,
  id: "exampleId",
  pickupLocation: "examplePickupLocation",
  price: 42.42,
  scheduledAt: new Date(),
  updatedAt: new Date(),
  volume: 42.42,
};

const service = {
  createMove() {
    return CREATE_RESULT;
  },
  moves: () => FIND_MANY_RESULT,
  move: ({ where }: { where: { id: string } }) => {
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

describe("Move", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MoveService,
          useValue: service,
        },
      ],
      controllers: [MoveController],
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

  test("POST /moves", async () => {
    await request(app.getHttpServer())
      .post("/moves")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completedAt: CREATE_RESULT.completedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        scheduledAt: CREATE_RESULT.scheduledAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /moves", async () => {
    await request(app.getHttpServer())
      .get("/moves")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          completedAt: FIND_MANY_RESULT[0].completedAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          scheduledAt: FIND_MANY_RESULT[0].scheduledAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /moves/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/moves"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /moves/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/moves"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        completedAt: FIND_ONE_RESULT.completedAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        scheduledAt: FIND_ONE_RESULT.scheduledAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /moves existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/moves")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completedAt: CREATE_RESULT.completedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        scheduledAt: CREATE_RESULT.scheduledAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/moves")
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
