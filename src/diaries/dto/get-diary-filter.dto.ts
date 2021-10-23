import { IsEnum, IsOptional, IsString } from 'class-validator';
import { DiaryStatus } from '../diary-status.enum';

export class GetDiariesFilterDto {
  @IsOptional()
  @IsEnum(DiaryStatus)
  status?: DiaryStatus;
  @IsOptional()
  @IsString()
  search: string;
}
