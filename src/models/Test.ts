export type StaticTextPart = {
  type: 'staticText';
  value: string;
  bold?: boolean;
};

export type NewLinePart = {
  type: 'newLine';
};

export type SingleChoicePart = {
  type: 'singleChoice';
  value: string;
  options: string[];
};

export type OpenTextPart = {
  type: 'openText';
  value: string;
  maxLength?: number;
};

export type QuestionPart = StaticTextPart | NewLinePart | SingleChoicePart | OpenTextPart;

export type Question = QuestionPart[];

export type Test = {
  id: string;
  title: string;
  questions: Question[];
};
