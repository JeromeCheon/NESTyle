import { Injectable, NotFoundException } from '@nestjs/common';
import { DiaryStatus } from './diary-status.enum';
import { v4 as uuid } from 'uuid';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { GetDiariesFilterDto } from './dto/get-diary-filter.dto';
import { Diary } from './diary.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DiaryRepository } from './diaries.repository';
import { UpdateDiaryDto } from './dto/update-diary.dto';

@Injectable()
export class DiariesService {
  constructor(
    @InjectRepository(DiaryRepository)
    private diaryRepository: DiaryRepository,
  ) {}

  getDiaries(filterDto: GetDiariesFilterDto): Promise<Diary[]> {
    return this.diaryRepository.getDiaries(filterDto);
  }

  async getDiaryById(id: string): Promise<Diary> {
    const found = await this.diaryRepository.findOne(id); // 찾았는지를 확인해야 함
    if (!found) {
      throw new NotFoundException(`Diary with ID "${id}" not found`);
    }
    return found;
  }

  // async getDiariesByMonth(month: string): Promise<Diary[]> {
  //   const found = await this.diaryRepository.find({
  //     where: { date: `${Number(month)}` },
  //   });
  //   // getMonth 사용해야 하는데 쿼리를 어떻게..?
  //   return this.diaries.filter(
  //     (diary) => diary.date.getMonth() === Number(month) - 1,
  //   );
  // }

  createDiary(createDiaryDto: CreateDiaryDto): Promise<Diary> {
    return this.diaryRepository.createDiary(createDiaryDto);
  }

  deleteDiary(id: string): Promise<void> {
    return this.diaryRepository.deleteDiary(id);
  }

  async updateTitleNContent(
    id: string,
    statusDto: UpdateDiaryDto,
  ): Promise<Diary> {
    const diary = await this.getDiaryById(id);
    const { title, content } = statusDto;
    diary.title = title;
    diary.content = content;
    diary.date = new Date();
    diary.status = DiaryStatus.IN_PROGRESS;
    await this.diaryRepository.save(diary);

    return diary;
  }
}
