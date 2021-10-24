import { IsString } from 'class-validator';

export class UpdateDiaryDto {
  @IsString()
  title: string;
  @IsString()
  content: string;
}
