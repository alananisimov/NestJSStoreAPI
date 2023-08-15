import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

describe('AppController (e2e)', () => {
  let app: NestFastifyApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Main page');
  });
  it('/products (GET)', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
      .expect(Array);
  });
  it('/products/add (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/products/add')
      .expect(202)
      .expect('Body cant be null');
  });
  it('/products/editbyid/1 (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/products/editbyid/1')
      .expect(200)
      .expect('Body cant be null');
  });
  it('/products/deletebyid/0 (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/products/deletebyid/0')
      .expect(202)
      .expect('id cant be 0');
  });
  it('/products/delete_all (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/products/delete_all')
      .expect(202)
      .expect('id cant be 0');
  });
});
