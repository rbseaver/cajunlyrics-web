import { Controller, Get, Inject } from '@nestjs/common';
import { VersionService, BuildInformation } from './version.service';

@Controller('version')
export class VersionController {
  constructor(@Inject(VersionService) private readonly versionService: VersionService) {}
  /**
   * Get the version of the application
   * @returns BuildInformation Object containing the version
   */
  @Get()
  getVersion(): BuildInformation {
    return this.versionService.getVersion();
  }
}
