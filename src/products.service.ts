import { Injectable } from '@nestjs/common';
import { Product } from './models/Product';
import { get } from '@vercel/edge-config';
import * as axios from 'axios';
@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor() {
    this.loadProducts();
  }

  private async loadProducts() {
    try {
      const data: Array<Product> = await get('products');
      this.products = data;
      console.log(this.products);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }

  private async saveProducts() {
    try {
      const res = await axios.default.patch(
        'https://api.vercel.com/v1/edge-config/ecfg_jeulv3pkm9h0aj04qaufb2fgqxbf/items',
        {
          items: [
            { operation: 'update', key: 'products', value: this.products },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 7KDKt8lR35SJHgPfcRhJrPT1',
          },
        },
      );
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  }

  async getAllProducts() {
    this.loadProducts();
    return this.products;
  }

  addProduct(newProduct: Product) {
    this.loadProducts();
    this.products.push(newProduct);
    this.saveProducts();
  }
  deleteProduct() {
    this.products = [];
    this.saveProducts();
    return this.products;
  }
}
