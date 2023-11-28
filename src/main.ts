import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import * as path from 'path';
// import { db } from '@vercel/postgres';
const port = process.env.PORT || 3001;
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  // const { rows, fields } = await db.sql`SELECT * FROM reviews`;
  // console.log(rows, fields);
  app.useStaticAssets({
    root: path.join(process.cwd(), './public'),
  });
  app.enableCors({
    origin: ['https://bookconer.site', 'http://localhost:3000'],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });
  await app.listen(port, '0.0.0.0');
}
bootstrap();
