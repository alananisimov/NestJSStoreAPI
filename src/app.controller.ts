import { Controller, Get } from '@nestjs/common';
import {
  UsersAppService,
  ProductsAppService,
  MainAppService,
} from './app.service';

@Controller('/') // Add '/user' route
export class MainAppController {
  constructor(private readonly appService: MainAppService) {}

  // Change the function name to getUsers
  @Get()
  getMain(): string {
    return this.appService.getMain();
  }
}
@Controller('/users') // Add '/user' route
export class UsersAppController {
  constructor(private readonly appService: UsersAppService) {}

  // Change the function name to getUsers
  @Get()
  getUsers(): string[] {
    return this.appService.getUsers();
  }
}
@Controller('/get_products') // Add '/user' route
export class ProductsAppController {
  constructor(private readonly appService: ProductsAppService) {}

  // Change the function name to getUsers
  @Get()
  getProducts(): string {
    return this.appService.getProducts();
  }
}
