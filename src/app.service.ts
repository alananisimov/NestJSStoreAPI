import { Injectable } from '@nestjs/common';
@Injectable()
export class UsersAppService {
  getUsers(): string[] {
    return ['userOne', 'userTwo'];
  }
}
export class MainAppService {
  getMain(): string {
    return 'Main page';
  }
}
