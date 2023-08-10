import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './models/Product';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  @HttpCode(200)
  async getProducts() {
    return this.productsService.getAllProducts();
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
