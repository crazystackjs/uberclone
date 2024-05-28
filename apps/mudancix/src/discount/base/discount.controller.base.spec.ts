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
import { DiscountController } from "../discount.controller";
import { DiscountService } from "../discount.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  description: "exampleDescription",
  id: 42,
  percentage: 42.42,
  validUntil: new Date(),
};
const CREATE_RESULT = {
  description: "exampleDescription",
  id: 42,
  percentage: 42.42,
  validUntil: new Date(),
};
const FIND_MANY_RESULT = [
  {
    description: "exampleDescription",
    id: 42,
    percentage: 42.42,
    validUntil: new Date(),
  },
];
const FIND_ONE_RESULT = {
  description: "exampleDescription",
  id: 42,
  percentage: 42.42,
  validUntil: new Date(),
};

const service = {
  createDiscount() {
    return CREATE_RESULT;
  },
  discounts: () => FIND_MANY_RESULT,
  discount: ({ where }: { where: { id: string } }) => {
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

describe("Discount", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DiscountService,
          useValue: service,
        },
      ],
      controllers: [DiscountController],
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

  test("POST /discounts", async () => {
    await request(app.getHttpServer())
      .post("/discounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        validUntil: CREATE_RESULT.validUntil.toISOString(),
      });
  });

  test("GET /discounts", async () => {
    await request(app.getHttpServer())
      .get("/discounts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          validUntil: FIND_MANY_RESULT[0].validUntil.toISOString(),
        },
      ]);
  });

  test("GET /discounts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/discounts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /discounts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/discounts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        validUntil: FIND_ONE_RESULT.validUntil.toISOString(),
      });
  });

  test("POST /discounts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/discounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        validUntil: CREATE_RESULT.validUntil.toISOString(),
      })
      .then(function () {
        agent
          .post("/discounts")
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
