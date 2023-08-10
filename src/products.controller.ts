import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './Product';
import { get } from '@vercel/edge-config';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  async getProducts() {
    const id = await get('products');

    return id;
  }
  @Post('add')
  addProductFromURL(@Body() newProduct: Product) {
    this.productsService.addProduct(newProduct);
    return newProduct;
  }
  @Get('delete')
  clearProducts() {
    return this.productsService.deleteProduct();
  }
}
