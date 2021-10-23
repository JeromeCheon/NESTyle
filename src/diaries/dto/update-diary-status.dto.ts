import { IsEnum } from 'class-validator';
import { DiaryStatus } from '../diary-status.enum';

export class UpdateDiaryStatusDto {
  @IsEnum(DiaryStatus)
  status: DiaryStatus;
}
