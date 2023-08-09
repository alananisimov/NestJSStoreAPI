import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('/add_product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProduct(@Query('id') id: number) {
    return this.productsService.getProduct(id);
  }

  @Post()
  addProduct(@Body() product: any) {
    return this.productsService.addProduct(product);
  }
}
