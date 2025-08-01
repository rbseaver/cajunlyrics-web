import { Module } from '@nestjs/common';
import { VersionController } from './version/version.controller';
import { VersionService } from './version/version.service';
import { LyricsController } from './lyrics/lyrics.controller';
import { LyricsService } from './lyrics/lyrics.service';
import { HttpClient } from './http-client/http-client';

@Module({
  imports: [],
  controllers: [VersionController, LyricsController],
  providers: [VersionService, LyricsService, HttpClient],
})
export class AppModule {}
