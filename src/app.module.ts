import { Module } from '@nestjs/common';
import {
  UsersAppController,
  ProductsAppController,
  MainAppController,
} from './app.controller';
import {
  UsersAppService,
  ProductsAppService,
  MainAppService,
} from './app.service';
import { UserModule } from './user/user.module';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [UserModule],
  controllers: [
    UsersAppController,
    ProductsAppController,
    MainAppController,
    ProductsController,
  ],
  providers: [
    UsersAppService,
    ProductsAppService,
    MainAppService,
    ProductsService,
  ],
})
export class AppModule {}
