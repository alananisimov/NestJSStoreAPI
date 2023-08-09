import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './Product';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Post('add')
  addProductFromURL(@Body() newProduct: Product) {
    this.productsService.addProduct(newProduct);
    return newProduct;
  }

  @Delete('delete/:id')
  deleteProduct(@Param('id') id: number) {
    const deletedProduct = this.productsService.deleteProduct(id);
    if (deletedProduct) {
      return { message: 'Product deleted successfully' };
    } else {
      return { message: 'Product not found' };
    }
  }
}
