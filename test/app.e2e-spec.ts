import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { App } from 'supertest/types';
import { before, test } from 'mocha'
import * as packageJson from '../package.json';

describe('when calling api', () => {
  let app: INestApplication<App>;
  const currentPackagJsonVersion = packageJson.version;

  before(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.setGlobalPrefix('api');

    await app.init();
  });

  describe('and querying /version endpoint', () => {
    test('it should return version object', async () => {
      await request(app.getHttpServer())
        .get('/api/version')
        .expect(200)
        .expect({
          version: currentPackagJsonVersion
        });
    });    
  });
});
