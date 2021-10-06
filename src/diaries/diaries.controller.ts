import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DiariesService } from './diaries.service';
import { Diary } from './diary.model';
import { CreateDiaryDto } from './dto/create-diary.dto';

@Controller('diaries')
export class DiariesController {
  constructor(private diariesService: DiariesService) {}

  @Get()
  getAllDiaries(): Diary[] {
    return this.diariesService.getAllDiaries();
  }

  @Get('/:id')
  getDiaryById(@Param('id') id: string): Diary {
    return this.diariesService.getDiaryById(id);
  }

  @Get('/:month')
  getDiariesByMonth(@Param('month') month: string): Diary[] {
    return this.diariesService.getDiariesByMonth(month);
  }

  @Post()
  createDiary(@Body() createDiaryDto: CreateDiaryDto): Diary {
    return this.diariesService.createDiary(createDiaryDto);
  }

  @Delete('/:id')
  deleteDiary(@Param('id') id: string): void {
    return this.diariesService.deleteDiary(id);
  }
}
