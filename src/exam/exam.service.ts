import { Injectable } from '@nestjs/common';
import { Exam, ExamLength } from './exam.interface';
import questions from 'src/questions';

@Injectable()
export class ExamService {
  generate(length: ExamLength): Exam {
    try {
      return questions.sort(() => 0.5 - Math.random()).slice(0, length);
    } catch (error) {
      throw new Error(error);
    }
  }
}
