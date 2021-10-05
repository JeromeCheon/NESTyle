import { Injectable } from '@nestjs/common';
import { Diary } from './diary.model';

@Injectable()
export class DiariesService {
  private diaries: Diary[] = [];

  getAllDiaries() {
    return this.diaries;
  }
}
