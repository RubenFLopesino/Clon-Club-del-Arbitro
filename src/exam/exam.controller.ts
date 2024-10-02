import { Controller, Get, Query } from '@nestjs/common';
import { Exam, ExamLength } from './exam.interface';
import { ExamService } from './exam.service';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get('')
  generate(@Query() query: { length: ExamLength }): Exam {
    return this.examService.generate(query.length);
  }
}
