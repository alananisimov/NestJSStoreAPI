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
        'https://edge-config.vercel.com/' +
          process.env.EDGE_ID +
          '/item/products',
        {
          headers: {
            Authorization: 'Bearer ' + process.env.EDGE_READ_ACCESS_TOKEN,
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
      'https://api.vercel.com/v1/edge-config/' + process.env.EDGE_ID + '/items',
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
      'https://api.vercel.com/v1/edge-config/' + process.env.EDGE_ID + '/items',
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
  async updateProductById(id: number, newProduct: Product) {
    try {
      const response = await axios.default.get(
        'https://edge-config.vercel.com/' +
          process.env.EDGE_ID +
          '/item/products',
        {
          headers: {
            Authorization: 'Bearer ' + process.env.EDGE_READ_ACCESS_TOKEN,
          },
        },
      );

      const products: Product[] = response.data;
      console.log(newProduct);
      // Find the index of the product with the given ID
      const productIndex = products.findIndex(
        (product) => product.id.toString() === id.toString(),
      );
      // Remove the product from the array
      if (productIndex !== -1) {
        products[productIndex] = newProduct;
        // Update the products list on the server
        const updateResponse = await axios.default.patch(
          'https://api.vercel.com/v1/edge-config/' +
            process.env.EDGE_ID +
            '/items',
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
        'https://edge-config.vercel.com/' +
          process.env.EDGE_ID +
          '/item/products',
        {
          headers: {
            Authorization: 'Bearer ' + process.env.EDGE_READ_ACCESS_TOKEN,
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
        'https://api.vercel.com/v1/edge-config/' +
          process.env.EDGE_ID +
          '/items',
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
