import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import path from 'path';
export const filePath = path.join(process.cwd(), './public/products.json')
@Injectable()
export class ProductsService {
  private products: any[] = [];

  constructor() {
    this.loadProducts();
  }

  private loadProducts() {
    const data = fs.readFileSync(filePath, 'utf8');
    this.products = JSON.parse(data);
  }

  private saveProducts() {
    fs.writeFileSync(filePath, JSON.stringify(this.products, null, 2), 'utf8');
  }

  getProduct(id: number) {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product: any) {
    const newProduct = {
      ...product,
      id: this.products.length + 1,
    };
    this.products.push(newProduct);
    this.saveProducts();
    return newProduct;
  }
}
