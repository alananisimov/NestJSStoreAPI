import { Module } from '@nestjs/common';
import { UsersAppController, MainAppController } from './app.controller';
import { UsersAppService, MainAppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule.forRoot()],
  controllers: [UsersAppController, MainAppController, ProductsController],
  providers: [UsersAppService, MainAppService, ProductsService],
})
export class AppModule {}
