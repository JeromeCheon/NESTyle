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
import { Diary } from './diary.entity';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { GetDiariesFilterDto } from './dto/get-diary-filter.dto';
import { UpdateDiaryStatusDto } from './dto/update-diary-status.dto';

@Controller('diaries')
export class DiariesController {
  constructor(private diariesService: DiariesService) {}

  @Get()
  getDiaries(@Query() filterDto: GetDiariesFilterDto): Diary[] {
    if (Object.keys(filterDto).length) {
      return this.diariesService.getDiariesWithFilters(filterDto);
    } else {
      return this.diariesService.getAllDiaries();
    }
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
    @Body() updateDiaryStatusDto: UpdateDiaryStatusDto,
  ): Diary {
    const { status } = updateDiaryStatusDto;
    return this.diariesService.updateTitleNContent(id, title, content, status);
  }
}
