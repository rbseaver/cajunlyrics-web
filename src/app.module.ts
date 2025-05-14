import { Module } from '@nestjs/common';
import { VersionController } from './version/version.controller';
import { VersionService } from './version/version.service';
import { LyricsController } from './lyrics/lyrics.controller';
import { LyricsService } from './lyrics/lyrics.service';

@Module({
  imports: [],
  controllers: [VersionController, LyricsController],
  providers: [VersionService, LyricsService],
})
export class AppModule {}
