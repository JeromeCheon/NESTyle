import { Injectable } from '@nestjs/common';
import { Diary, DiaryStatus } from './diary.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class DiariesService {
  private diaries: Diary[] = [];

  getAllDiaries() {
    return this.diaries;
  }

  getDiariesByMonth(month: string) {
    return this.diaries.filter(
      (diary) => diary.date.getMonth() === Number(month) - 1,
    );
  }

  createDiary(title: string, content: string): Diary {
    const diary: Diary = {
      id: uuid(),
      title: title,
      date: new Date(), // Date instance를 넣는게 맞을까, string으로 넣는게 맞을까?
      content: content,
      status: DiaryStatus.NEW,
    };
    this.diaries.push(diary); // Diary에 푸시를 해서 새 일기를 기록함
    return diary;
  }
}
