import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { App } from 'supertest/types';


describe('AppController (e2e)', () => {
  let app: INestApplication<App>;
  const currentPackagJsonVersion = require('../package.json').version;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('version endpoint should return version object', () => {
    request(app.getHttpServer())
      .get('/api/version')
      .expect(200)
      .expect({
        version: currentPackagJsonVersion
      });
  });
});
