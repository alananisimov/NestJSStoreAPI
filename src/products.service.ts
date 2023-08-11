import { HttpCode, Injectable } from '@nestjs/common';
import { Product } from './models/Product';
import { get } from '@vercel/edge-config';
import * as axios from 'axios';
import { error } from 'console';
@Injectable()
export class ProductsService {
  async getAllProducts() {
    try {
      const response = await axios.default.get<Product[]>(
        'https://edge-config.vercel.com/ecfg_jeulv3pkm9h0aj04qaufb2fgqxbf/item/products',
        {
          headers: {
            Authorization: 'Bearer 4679659a-ad8c-4aa9-92e7-8345465955d0',
          },
        },
      );
      const new1 = response.data;
      return new1; // Return the actual data from the response
    } catch (error) {
      // Handle error here
      throw error;
    }
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
  async deleteAllProducts() {
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
  async updateProductById(id, newProduct: Product) {
    try {
      const response = await axios.default.get(
        'https://edge-config.vercel.com/ecfg_jeulv3pkm9h0aj04qaufb2fgqxbf/item/products',
        {
          headers: {
            Authorization: 'Bearer 4679659a-ad8c-4aa9-92e7-8345465955d0',
          },
        },
      );

      const products: Product[] = response.data;
      console.log(products);
      console.log(JSON.stringify(newProduct));
      // Find the index of the product with the given ID
      const productIndex = products.findIndex((product) => product.id === id);
      // Remove the product from the array
      if (productIndex !== -1) {
        products[productIndex] = newProduct;
        // Update the products list on the server
        const updateResponse = await axios.default.patch(
          'https://api.vercel.com/v1/edge-config/ecfg_jeulv3pkm9h0aj04qaufb2fgqxbf/items',
          {
            items: [{ operation: 'update', key: 'products', value: products }],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer 7KDKt8lR35SJHgPfcRhJrPT1',
            },
          },
        );

        console.log(updateResponse);
        console.log(newProduct);
      } else {
        error('no items found with id' + productIndex);
      }
    } catch (error) {
      // Handle error here
      throw error;
    }
  }
  async deleteById(id: number) {
    try {
      const response = await axios.default.get(
        'https://edge-config.vercel.com/ecfg_jeulv3pkm9h0aj04qaufb2fgqxbf/item/products',
        {
          headers: {
            Authorization: 'Bearer 4679659a-ad8c-4aa9-92e7-8345465955d0',
          },
        },
      );

      const products: Product[] = response.data;
      console.log(products);
      // Find the index of the product with the given ID
      const productIndex = products.findIndex((product) => product.id === id);

      // Remove the product from the array
      products.splice(productIndex, 1);
      // Update the products list on the server
      const updateResponse = await axios.default.patch(
        'https://api.vercel.com/v1/edge-config/ecfg_jeulv3pkm9h0aj04qaufb2fgqxbf/items',
        {
          items: [{ operation: 'update', key: 'products', value: products }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 7KDKt8lR35SJHgPfcRhJrPT1',
          },
        },
      );

      console.log(updateResponse);
    } catch (error) {
      // Handle error here
      throw error;
    }
  }
}
