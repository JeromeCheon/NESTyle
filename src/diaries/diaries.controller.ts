import { Controller, Get } from '@nestjs/common';
import { DiariesService } from './diaries.service';
import { Diary } from './diary.model';

@Controller('diaries')
export class DiariesController {
  constructor(private diariesService: DiariesService) { }

  @Get()
  getAllDiaries(): Diary[] {
    return this.diariesService.getAllDiaries();
  }
}
