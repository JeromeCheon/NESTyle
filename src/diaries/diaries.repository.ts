import { EntityRepository, Repository } from 'typeorm';
import { DiaryStatus } from './diary-status.enum';
import { Diary } from './diary.entity';
import { CreateDiaryDto } from './dto/create-diary.dto';

@EntityRepository(Diary)
export class DiaryRepository extends Repository<Diary> {
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
}
