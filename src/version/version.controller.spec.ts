import { Test, TestingModule } from '@nestjs/testing';
import { VersionController } from './version.controller';
import { VersionService } from './version.service';

describe('VersionController', () => {
  let controller: VersionController;
  const mockVersionService = {
    getVersion: vi.fn().mockReturnValue({
      version: '1.0.0'
    })
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VersionController],
      providers: [{
        provide: VersionService,
        useValue: mockVersionService
      }]
    }).compile();

    controller = module.get<VersionController>(VersionController);
  });

  it('should get version from version service', () => {
    const buildInfo = controller.getVersion();
    expect(buildInfo).toEqual({
      version: '1.0.0'
    })
  });
});
