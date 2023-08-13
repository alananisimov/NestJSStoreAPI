import { Module } from '@nestjs/common';
import { MainAppController } from './app.controller';
import { MainAppService } from './app.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [MainAppController, ProductsController],
  providers: [MainAppService, ProductsService],
})
export class AppModule {}
