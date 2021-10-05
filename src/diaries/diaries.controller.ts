import { Body, Controller, Get, Post } from '@nestjs/common';
import { DiariesService } from './diaries.service';
import { Diary } from './diary.model';

@Controller('diaries')
export class DiariesController {
  constructor(private diariesService: DiariesService) { }

  @Get()
  getAllDiaries(): Diary[] {
    return this.diariesService.getAllDiaries();
  }

  @Post()
  createDiary(
    @Body('title') title: string,
    @Body('date') date: Date,
    @Body('content') content: string,
  ): Diary {
    return this.diariesService.createDiary(title, date, content);
  }
}
