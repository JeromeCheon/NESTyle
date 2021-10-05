import { Injectable } from '@nestjs/common';
import { Diary, DiaryStatus } from './diary.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class DiariesService {
  private diaries: Diary[] = [];

  getAllDiaries() {
    return this.diaries;
  }

  createDiary(title: string, date: Date, content: string): Diary {
    const diary: Diary = {
      id: uuid(),
      title: title,
      date: date,
      content: content,
      status: DiaryStatus.NEW,
    };
    this.diaries.push(diary); // Diary에 푸시를 해서 새 일기를 기록함
    return diary;
  }
}
