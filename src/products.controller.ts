import {
  Controller,
  Get,
  Body,
  HttpCode,
  ParseIntPipe,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
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
  @Patch('add')
  @HttpCode(202)
  addProductFromURL(@Body() newProduct: Product) {
    this.productsService.addProduct(newProduct);
    return newProduct;
  }
  @Delete('delete_all')
  @HttpCode(202)
  clearProducts() {
    return this.productsService.deleteAllProducts();
  }
  @Delete('deletebyid/:id')
  @HttpCode(202)
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteById(id);
  }
  @Patch('editbyid/:id')
  @HttpCode(200)
  EditProductFromURL(
    @Param('id', ParseIntPipe) id: number,
    @Body() newProduct: Product,
  ) {
    this.productsService.updateProductById(id, newProduct);
  }
}
