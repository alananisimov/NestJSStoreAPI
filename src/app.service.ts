import { Injectable } from '@nestjs/common';
@Injectable()
export class MainAppService {
  getMain(): string {
    return 'Main page';
  }
}
