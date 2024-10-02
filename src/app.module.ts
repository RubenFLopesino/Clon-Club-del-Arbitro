import { Module } from '@nestjs/common';
import { ExamModule } from './exam/exam.module';

@Module({
  imports: [ExamModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
