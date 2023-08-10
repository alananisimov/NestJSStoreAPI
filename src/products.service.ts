import { Injectable } from '@nestjs/common';
import { Product } from './models/Product';
import { get } from '@vercel/edge-config';
import * as axios from 'axios';
@Injectable()
export class ProductsService {
  async getAllProducts() {
    const req = axios.default.get(
      'https://edge-config.vercel.com/ecfg_jeulv3pkm9h0aj04qaufb2fgqxbf/item/products?token=4679659a-ad8c-4aa9-92e7-8345465955d0',
    );
    return req;
  }

  async addProduct(newProduct: Product) {
    const res = await axios.default.patch(
      'https://api.vercel.com/v1/edge-config/ecfg_jeulv3pkm9h0aj04qaufb2fgqxbf/items',
      {
        items: [{ operation: 'update', key: 'products', value: newProduct }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 7KDKt8lR35SJHgPfcRhJrPT1',
        },
      },
    );
    console.log(res);
  }
  async deleteProduct() {
    const res = await axios.default.patch(
      'https://api.vercel.com/v1/edge-config/ecfg_jeulv3pkm9h0aj04qaufb2fgqxbf/items',
      {
        items: [{ operation: 'update', key: 'products', value: [] }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 7KDKt8lR35SJHgPfcRhJrPT1',
        },
      },
    );
    console.log(res);
  }
}
