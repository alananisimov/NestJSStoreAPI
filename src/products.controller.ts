import {
  Controller,
  Get,
  Body,
  HttpCode,
  ParseIntPipe,
  Param,
  Delete,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './models/Product';
import { AuthGuard } from './auth/auth.guard';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  @HttpCode(200)
  async getProducts() {
    return this.productsService.getAllProducts();
  }
  @UseGuards(AuthGuard)
  @Patch('add')
  @HttpCode(202)
  addProductFromURL(@Body() newProduct: Product) {
    if (newProduct != undefined && null && '' && {}) {
      this.productsService.addProduct(newProduct);
      return newProduct;
    } else {
      return 'Body cant be null';
    }
  }
  @UseGuards(AuthGuard)
  @Delete('delete_all')
  @HttpCode(202)
  clearProducts() {
    return this.productsService.deleteAllProducts();
  }
  @UseGuards(AuthGuard)
  @Delete('deletebyid/:id')
  @HttpCode(202)
  deleteById(@Param('id', ParseIntPipe) id: number) {
    if (id != 0) {
      return this.productsService.deleteById(id);
    } else {
      return 'id cant be 0';
    }
  }
  @UseGuards(AuthGuard)
  @Patch('editbyid/:id')
  @HttpCode(200)
  EditProductFromURL(
    @Param('id', ParseIntPipe) id: number,
    @Body() newProduct: Product,
  ) {
    if (newProduct != undefined) {
      this.productsService.updateProductById(id, newProduct);
    } else {
      return 'Body cant be null';
    }
  }
}
