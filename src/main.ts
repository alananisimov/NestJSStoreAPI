import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import * as path from 'path';
const port = process.env.PORT || 3000;
// Use this after the variable declaration
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useStaticAssets({
    root: path.join(process.cwd(), './public'),
  });
  await app.listen(port, '0.0.0.0');
}
bootstrap();
