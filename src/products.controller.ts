import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get('add')
  addProduct(
    @Query('id') id: number,
    @Query('title') title: string,
    @Query('price') price: number,
    @Query('description') description: string,
    @Query('category') category: string,
    @Query('image') image: string,
    @Query('ratingRate') ratingRate: number,
    @Query('ratingCount') ratingCount: number,
  ) {
    const newProduct = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating: {
        rate: ratingRate,
        count: ratingCount,
      },
    };
    this.productsService.addProduct(newProduct);
    return newProduct;
  }
}
