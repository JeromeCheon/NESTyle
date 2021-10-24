import { Injectable, NotFoundException } from '@nestjs/common';
import { DiaryStatus } from './diary-status.enum';
import { v4 as uuid } from 'uuid';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { GetDiariesFilterDto } from './dto/get-diary-filter.dto';
import { Diary } from './diary.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DiaryRepository } from './diaries.repository';

@Injectable()
export class DiariesService {
  constructor(
    @InjectRepository(DiaryRepository)
    private diaryRepository: DiaryRepository,
  ) {}

  // getAllDiaries(): Diary[] {
  //   return this.diaryRepository;
  // }

  // getDiariesWithFilters(getDiariesWithFilters: GetDiariesFilterDto): Diary[] {
  //   const { status, search } = getDiariesWithFilters;

  //   // diary 결과를 담을 diaries 변수를 하나 생성한다
  //   let diaries = this.getAllDiaries();
  //   // status 필터로 하는 액션
  //   if (status) {
  //     diaries = diaries.filter((diary) => diary.status === status);
  //   }
  //   // search 필터로 하는 액션
  //   if (search) {
  //     diaries = diaries.filter((diary) => {
  //       if (diary.title.includes(search) || diary.content.includes(search)) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   }
  //   // diaries 결과를 반환함
  //   return diaries;
  // }
  async getDiaryById(id: string): Promise<Diary> {
    const found = await this.diaryRepository.findOne(id); // 찾았는지를 확인해야 함
    if (!found) {
      throw new NotFoundException(`Diary with ID "${id}" not found`);
    }
    return found;
  }

  // getDiariesByMonth(month: string): Diary[] {
  //   return this.diaries.filter(
  //     (diary) => diary.date.getMonth() === Number(month) - 1,
  //   );
  // }

  createDiary(createDiaryDto: CreateDiaryDto): Promise<Diary> {
    return this.diaryRepository.createDiary(createDiaryDto);
  }

  // deleteDiary(id: string): void {
  //   const found = this.getDiaryById(id);
  //   this.diaries = this.diaries.filter((diary) => diary.id === found.id);
  // }

  // updateTitleNContent(
  //   id: string,
  //   title: string,
  //   content: string,
  //   status: DiaryStatus,
  // ): Diary {
  //   const diary = this.getDiaryById(id);
  //   diary.title = title;
  //   diary.content = content;
  //   diary.date = new Date();
  //   diary.status = status;

  //   return diary;
  // }
}
