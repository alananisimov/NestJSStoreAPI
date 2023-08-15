import { Module } from '@nestjs/common';
import { MainAppController } from './app.controller';
import { MainAppService } from './app.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/user.module';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, UsersModule],
  controllers: [MainAppController, ProductsController],
  providers: [MainAppService, ProductsService],
})
export class AppModule {}
