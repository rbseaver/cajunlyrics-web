import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeAll(async () => {

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{
        provide: AppService,
        useValue: {
          getHello: vi.fn()
        }
      }]
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });


  it('should return "Hello World!"', () => {
    vi.spyOn(appService, 'getHello').mockReturnValue('Hello World!');
    expect(appController.getHello()).toBe('Hello World!');
  });
});
