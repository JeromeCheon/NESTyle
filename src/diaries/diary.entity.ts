import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DiaryStatus } from './diary-status.enum';

@Entity()
export class Diary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;
  @Column()
  content: string;
  @Column()
  date: Date;
  @Column()
  status: DiaryStatus;
}
