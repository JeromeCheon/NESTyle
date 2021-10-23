import { EntityRepository, Repository } from 'typeorm';
import { Diary } from './diary.entity';

@EntityRepository()
export class DiaryRepository extends Repository<Diary> {}
