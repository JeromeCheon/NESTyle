import { IsNotEmpty } from 'class-validator';
import { DiaryStatus } from '../diary.model';

export class GetDiariesFilterDto {
  @IsNotEmpty()
  status: DiaryStatus;
  @IsNotEmpty()
  search: string;
}
