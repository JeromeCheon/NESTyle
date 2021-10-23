import { IsEnum } from 'class-validator';
import { DiaryStatus } from '../diary.model';

export class UpdateDiaryStatusDto {
  @IsEnum(DiaryStatus)
  status: DiaryStatus;
}
