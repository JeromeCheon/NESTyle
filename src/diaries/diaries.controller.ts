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
import { UpdateDiaryDto } from './dto/update-diary.dto';

@Controller('diaries')
export class DiariesController {
  constructor(private diariesService: DiariesService) {}

  @Get()
  getDiaries(@Query() filterDto: GetDiariesFilterDto): Promise<Diary[]> {
    return this.diariesService.getDiaries(filterDto);
  }

  @Get('/:id')
  getDiaryById(@Param('id') id: string): Promise<Diary> {
    return this.diariesService.getDiaryById(id);
  }

  // @Get()
  // getDiariesByMonth(@Query() month: string): Diary[] {
  //   return this.diariesService.getDiariesByMonth(month);
  // }

  @Post()
  createDiary(@Body() createDiaryDto: CreateDiaryDto): Promise<Diary> {
    return this.diariesService.createDiary(createDiaryDto);
  }

  @Delete('/:id')
  deleteDiary(@Param('id') id: string): Promise<void> {
    return this.diariesService.deleteDiary(id);
  }

  @Patch('/:id')
  updateTitleNContent(
    @Param('id') id: string,
    @Body() updateDiaryDto: UpdateDiaryDto,
  ): Promise<Diary> {
    return this.diariesService.updateTitleNContent(id, updateDiaryDto);
  }
}
