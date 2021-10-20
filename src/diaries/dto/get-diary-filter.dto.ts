import { DiaryStatus } from '../diary.model';

export class GetDiariesFilterDto {
  status: DiaryStatus;
  search: string;
}
