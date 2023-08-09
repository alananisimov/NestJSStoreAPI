import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
const filePath = '/tmp/products.json';
@Injectable()
export class UsersAppService {
  getUsers(): string[] {
    return ['userOne', 'userTwo'];
  }
}
export class ProductsAppService {
  getProducts(): string {
    const configFIle = fs.readFileSync(filePath, 'utf-8').toString();
    return configFIle;
  }
}
export class MainAppService {
  getMain(): string {
    return 'Main page';
  }
}
