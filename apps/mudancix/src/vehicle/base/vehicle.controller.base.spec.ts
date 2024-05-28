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
import { VehicleController } from "../vehicle.controller";
import { VehicleService } from "../vehicle.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  capacityM3: 42.42,
  id: 42,
  licensePlate: "exampleLicensePlate",
  make: "exampleMake",
  model: "exampleModel",
};
const CREATE_RESULT = {
  capacityM3: 42.42,
  id: 42,
  licensePlate: "exampleLicensePlate",
  make: "exampleMake",
  model: "exampleModel",
};
const FIND_MANY_RESULT = [
  {
    capacityM3: 42.42,
    id: 42,
    licensePlate: "exampleLicensePlate",
    make: "exampleMake",
    model: "exampleModel",
  },
];
const FIND_ONE_RESULT = {
  capacityM3: 42.42,
  id: 42,
  licensePlate: "exampleLicensePlate",
  make: "exampleMake",
  model: "exampleModel",
};

const service = {
  createVehicle() {
    return CREATE_RESULT;
  },
  vehicles: () => FIND_MANY_RESULT,
  vehicle: ({ where }: { where: { id: string } }) => {
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

describe("Vehicle", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: VehicleService,
          useValue: service,
        },
      ],
      controllers: [VehicleController],
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

  test("POST /vehicles", async () => {
    await request(app.getHttpServer())
      .post("/vehicles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /vehicles", async () => {
    await request(app.getHttpServer())
      .get("/vehicles")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /vehicles/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/vehicles"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /vehicles/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/vehicles"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /vehicles existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/vehicles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/vehicles")
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
