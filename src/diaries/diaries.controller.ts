import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DiariesService } from './diaries.service';
import { Diary } from './diary.model';

@Controller('diaries')
export class DiariesController {
  constructor(private diariesService: DiariesService) {}

  @Get()
  getAllDiaries(): Diary[] {
    return this.diariesService.getAllDiaries();
  }

  @Get('/:month')
  getDiaryByMonth(@Param('month') month: string): Diary[] {
    return this.diariesService.getDiariesByMonth(month);
  }

  @Post()
  createDiary(
    @Body('title') title: string,
    @Body('content') content: string,
  ): Diary {
    return this.diariesService.createDiary(title, content);
  }
}
