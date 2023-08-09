import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './Product';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(
    'add/:id/:title/:price/:description/:category/:image/:ratingRate/:ratingCount',
  )
  addProductFromURL(
    @Param('id') id: number,
    @Param('title') title: string,
    @Param('price') price: number,
    @Param('description') description: string,
    @Param('category') category: string,
    @Param('image') image: string,
    @Param('ratingRate') ratingRate: number,
    @Param('ratingCount') ratingCount: number,
  ) {
    const newProduct: Product = {
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
