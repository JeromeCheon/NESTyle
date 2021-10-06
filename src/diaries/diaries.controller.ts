import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
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

  @Get()
  getDiariesByMonth(@Query() month: string): Diary[] {
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

  @Patch('/:id')
  updateTitleNContent(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ): Diary {
    return this.diariesService.updateTitleNContent(id, title, content);
  }
}
