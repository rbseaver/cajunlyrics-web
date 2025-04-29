import { Controller, Get, Inject } from '@nestjs/common';
import { VersionService } from './version.service';

@Controller('version')
export class VersionController {
  constructor(@Inject(VersionService) private readonly versionService: VersionService) {}
  /**
   * Get the version of the application
   * @returns {string} The version of the application
   */
  @Get()
  getVersion(): string {
    return this.versionService.getVersion();
  }
}
