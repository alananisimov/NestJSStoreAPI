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

@Module({
  imports: [UserModule],
  controllers: [UsersAppController, ProductsAppController, MainAppController],
  providers: [UsersAppService, ProductsAppService, MainAppService],
})
export class AppModule {}
