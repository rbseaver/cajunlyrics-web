import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // For whatever reason, the test only runs for this controller when the we @Inject the AppService.
  // There's a use case here: https://docs.nestjs.com/fundamentals/custom-providers, but that doesn't apply
  constructor(@Inject(AppService) private appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
