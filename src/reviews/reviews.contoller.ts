// reviews.controller.ts
import {
  Controller,
  Get,
  Body,
  HttpCode,
  ParseIntPipe,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { Review } from 'src/models/Review';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  @HttpCode(200)
  async getReviews() {
    return this.reviewsService.getAllReviews();
  }

  @Patch('add')
  @HttpCode(202)
  async addReview(@Body() newReview: Review) {
    return this.reviewsService.addReview(newReview);
  }

  @Delete('delete_all')
  @HttpCode(202)
  async clearReviews() {
    return this.reviewsService.deleteAllReviews();
  }

  @Patch('editbyid/:id')
  @HttpCode(200)
  async editReviewById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedReview: Review,
  ) {
    return this.reviewsService.updateReviewById(id, updatedReview);
  }

  @Delete('deletebyid/:id')
  @HttpCode(202)
  async deleteReviewById(@Param('id', ParseIntPipe) id: number) {
    return this.reviewsService.deleteReviewById(id);
  }
}
