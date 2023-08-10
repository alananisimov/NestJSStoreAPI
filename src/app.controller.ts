import { Controller, Get } from '@nestjs/common';
import { UsersAppService, MainAppService } from './app.service';

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
