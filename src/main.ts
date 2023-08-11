import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import * as path from 'path';

// Use this after the variable declaration
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useStaticAssets({
    root: path.join(__dirname, 'public'),
    prefix: '/public/',
  });
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
