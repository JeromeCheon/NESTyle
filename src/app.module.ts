import { Module } from '@nestjs/common';
import { DiariesController } from './diaries/diaries.controller';
import { DiariesService } from './diaries/diaries.service';
import { DiariesModule } from './diaries/diaries.module';

@Module({
  imports: [DiariesModule],
})
export class AppModule {}
