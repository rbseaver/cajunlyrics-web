import { Test, TestingModule } from '@nestjs/testing';
import { VersionService } from './version.service';
import { vol } from 'memfs';


vi.mock('node:fs', async () => {
  return {
    readFileSync: vi.fn((filePath: string, encoding: string) => {
      return vol.readFileSync(filePath, encoding);
    })
  };
});

vi.mock('node:path', async () => {
  return {
    resolve: vi.fn((...args: string[]) => {
      return args.join('/');
    })
  };
});

describe('when invoking version service', () => {
  let service: VersionService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VersionService],
    }).compile();

    service = module.get<VersionService>(VersionService);
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  describe('and package.json exists', () => {
    beforeEach(() => {
      vol.fromJSON({
        './package.json': JSON.stringify({
          version: '1.0.0'
        }),
      })
    });


    afterEach(() => {
      vi.restoreAllMocks();
      vol.reset();
    });

    it('it should return the semantic version', () => {
      const buildInfo = service.getVersion();

      expect(buildInfo).toEqual({
        version: '1.0.0'
      });
    });
  });

  describe('and package.json does not exist', () => {
    it('it should return undefined', () => {
      const action = () => service.getVersion();

      expect(action).toThrowError('Unable to read package.json file');
    });
  });
});
