import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  ParseIntPipe,
  Param,
  Delete,
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
  @Post('add')
  addProductFromURL(@Body() newProduct: Product) {
    this.productsService.addProduct(newProduct);
    return newProduct;
  }
  @Get('delete_all')
  clearProducts() {
    return this.productsService.deleteAllProducts();
  }
  @Get('deletebyid/:id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteById(id);
  }
  @Get('editbyid/:id')
  EditProductFromURL(
    @Param('id', ParseIntPipe) id: number,
    @Body() newProduct: Product,
  ) {
    this.productsService.updateProductById(id, newProduct);
  }
}
