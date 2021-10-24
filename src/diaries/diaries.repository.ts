import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { DiaryStatus } from './diary-status.enum';
import { Diary } from './diary.entity';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { GetDiariesFilterDto } from './dto/get-diary-filter.dto';

@EntityRepository(Diary)
export class DiaryRepository extends Repository<Diary> {
  async getDiaries(filterDto: GetDiariesFilterDto): Promise<Diary[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('diary');
    if (status) {
      // status가 존재하는 것들은
      query.andWhere('diary.status = :status', { status });
    }
    if (search) {
      query.andWhere(
        // 이러한 쿼리 구문은 외워야 하는가?
        'LOWER(diary.title) LIKE LOWER(:search) OR LOWER(diary.content) LIKE LOWER(:search)',
        { search: `%${search}%` },
      );
    }
    const diaries = await query.getMany();
    return diaries;
  }
  async createDiary(createDiaryDto: CreateDiaryDto): Promise<Diary> {
    const { title, content } = createDiaryDto;

    const diary = this.create({
      title,
      content,
      date: new Date(),
      status: DiaryStatus.NEW,
    });
    await this.save(diary);
    return diary;
  }
  async deleteDiary(id: string): Promise<void> {
    const result = await this.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Diary with ID "${id}" not found and cannot be deleted"`,
      );
    }
  }
}
