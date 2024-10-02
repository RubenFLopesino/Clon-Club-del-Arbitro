export const enum ExamLength {
  One = 1,
  Five = 5,
  Ten = 10,
  TwentyFive = 25,
}

export const enum QuestionOption {
  A = 'a',
  B = 'b',
  C = 'c',
}

export interface Question {
  question: string;
  options: {
    [key in QuestionOption]: string;
  };
  correctAnswer: { option: QuestionOption; explanation: string };
}

export type Exam = Question[];
