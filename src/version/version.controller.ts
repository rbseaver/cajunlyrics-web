import { Controller, Get, Inject } from '@nestjs/common';
import { VersionService, BuildInformation } from './version.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Version')
@Controller('version')
export class VersionController {
  constructor(@Inject(VersionService) private readonly versionService: VersionService) { }
  /**
   * Get the version of the application
   * @returns BuildInformation Object containing the version
   */
  @Get()
  @ApiOperation({ summary: 'Get the version of the application' })
  @ApiResponse({ status: 200, description: 'The version of the application', type: Object })
  getVersion(): BuildInformation {
    return this.versionService.getVersion();
  }
}
