import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { Product } from './Product';
import { AddProductService } from './product.service';
import { ProductsController } from './products.controller';

// Use this after the variable declaration
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const productsService = app.get(AddProductService);

  app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(3000);
}
bootstrap();
