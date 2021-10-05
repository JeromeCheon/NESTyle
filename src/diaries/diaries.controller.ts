import { Controller } from '@nestjs/common';
import { DiariesService } from './diaries.service';

@Controller('diaries')
export class DiariesController {
  constructor(private diariesService: DiariesService) {}
}
