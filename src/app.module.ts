import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/user.module';
import { ReviewsController } from './reviews/reviews.contoller';
import { ReviewsService } from './reviews/reviews.service';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, UsersModule],
  controllers: [ProductsController, ReviewsController],
  providers: [ProductsService, ReviewsService],
})
export class AppModule {}
