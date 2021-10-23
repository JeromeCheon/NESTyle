import { IsEnum, IsOptional, IsString } from 'class-validator';
import { DiaryStatus } from '../diary.model';

export class GetDiariesFilterDto {
  @IsOptional()
  @IsEnum(DiaryStatus)
  status?: DiaryStatus;
  @IsOptional()
  @IsString()
  search: string;
}
