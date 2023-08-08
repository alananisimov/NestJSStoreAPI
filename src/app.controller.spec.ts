import { Test, TestingModule } from '@nestjs/testing';
import { MainAppController } from './app.controller';
import { MainAppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [MainAppController],
      providers: [MainAppService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(MainAppController);
      expect(appController.getMain()).toBe('Main page');
    });
  });
});
