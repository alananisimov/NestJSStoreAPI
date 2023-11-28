// reviews.service.ts
import { Injectable } from '@nestjs/common';
import { db } from '@vercel/postgres';
import { Review } from 'src/models/Review';

@Injectable()
export class ReviewsService {
  async getAllReviews() {
    try {
      const { rows } = await db.sql`SELECT * FROM reviews`;
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async addReview(newReview: Review) {
    try {
      const { rows } = await db.sql`
        INSERT INTO reviews (name, date, header, text, avatar_url, title, stars, photo_url)
        VALUES (${newReview.name}, ${newReview.date}, ${newReview.header}, ${newReview.text}, ${newReview.avatar_url}, ${newReview.title}, ${newReview.stars}, ${newReview.photo_url})
        RETURNING *`;
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async deleteAllReviews() {
    try {
      await db.sql`DELETE FROM reviews`;
    } catch (error) {
      throw error;
    }
  }

  async updateReviewById(id: string | number | boolean, updatedReview: Review) {
    try {
      const { rows } = await db.sql`
        UPDATE reviews 
        SET name=${updatedReview.name}, date=${updatedReview.date}, header=${updatedReview.header},
            text=${updatedReview.text}, avatar_url=${updatedReview.avatar_url},
            title=${updatedReview.title}, stars=${updatedReview.stars}, photo_url=${updatedReview.photo_url}
        WHERE id=${id} 
        RETURNING *`;
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async deleteReviewById(id: string | number | boolean) {
    try {
      const { rows } = await db.sql`
        DELETE FROM reviews
        WHERE id=${id} 
        RETURNING *`;
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
}
