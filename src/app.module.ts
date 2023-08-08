import { Module } from '@nestjs/common';
import {
  UsersAppController,
  ProductsAppController,
  MainAppController,
  AddProductController,
} from './app.controller';
import {
  UsersAppService,
  ProductsAppService,
  MainAppService,
} from './app.service';
import { UserModule } from './user/user.module';
import { AddProductService } from './product.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [UserModule],
  controllers: [
    UsersAppController,
    ProductsAppController,
    MainAppController,
    AddProductController,
    ProductsController,
  ],
  providers: [
    UsersAppService,
    ProductsAppService,
    MainAppService,
    AddProductService,
  ],
})
export class AppModule {}
