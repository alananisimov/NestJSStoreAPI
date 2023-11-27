import { Injectable } from '@nestjs/common';
import { Product } from '../models/Product';
import { db } from '@vercel/postgres';

@Injectable()
export class ProductsService {
  async getAllProducts() {
    try {
      const result = await db.query('SELECT * FROM products');
      const products: Product[] = result.rows;
      return products;
    } catch (error) {
      throw error;
    }
  }

  async addProduct(newProduct: Product) {
    try {
      const result = await db.query(
        'INSERT INTO products (category, count, description, id, image, price, rate, title) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [
          newProduct.category,
          newProduct.count,
          newProduct.description,
          newProduct.id,
          newProduct.image,
          newProduct.price,
          newProduct.rate,
          newProduct.title,
        ],
      );

      console.log('Inserted product:', result.rows[0]);
    } catch (error) {
      throw error;
    }
  }

  async deleteAllProducts() {
    try {
      await db.query('DELETE FROM products');
    } catch (error) {
      throw error;
    }
  }

  async updateProductById(id: number, newProduct: Product) {
    try {
      const result = await db.query(
        'UPDATE products SET category=$1, count=$2, description=$3, image=$4, price=$5, rate=$6, title=$7 WHERE id=$8 RETURNING *',
        [
          newProduct.category,
          newProduct.count,
          newProduct.description,
          newProduct.image,
          newProduct.price,
          newProduct.rate,
          newProduct.title,
          id,
        ],
      );

      console.log('Updated product:', result.rows[0]);
    } catch (error) {
      throw error;
    }
  }

  async deleteById(id: number) {
    try {
      const result = await db.query(
        'DELETE FROM products WHERE id=$1 RETURNING *',
        [id],
      );
      console.log('Deleted product:', result.rows[0]);
    } catch (error) {
      throw error;
    }
  }
}
