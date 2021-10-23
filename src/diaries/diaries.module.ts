import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiariesController } from './diaries.controller';
import { DiaryRepository } from './diaries.repository';
import { DiariesService } from './diaries.service';

@Module({
  imports: [TypeOrmModule.forFeature([DiaryRepository])],
  controllers: [DiariesController],
  providers: [DiariesService],
})
export class DiariesModule {}
