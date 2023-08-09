import { Injectable } from '@nestjs/common';
import { Product } from './Product';
import * as fs from 'fs';
import * as path from 'path';
const filePath = '/tmp/users.json';
@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  constructor() {
    this.loadProducts();
  }

  private loadProducts() {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      this.products.push(...JSON.parse(data));
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }

  private saveProducts() {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
    this.saveProducts();
  }
}
