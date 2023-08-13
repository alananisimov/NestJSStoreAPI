import { Controller, Get } from '@nestjs/common';
import { MainAppService } from './app.service';

@Controller('/') // Add '/user' route
export class MainAppController {
  constructor(private readonly appService: MainAppService) {}

  // Change the function name to getUsers
  @Get()
  getMain(): string {
    return this.appService.getMain();
  }
}
