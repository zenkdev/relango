type StaticTextField = {
  type: 'staticText';
  value: string;
  bold?: boolean;
};

type NewLineField = {
  type: 'newLine';
};

type SingleChoiceField = {
  type: 'singleChoice';
  taskId: string | number;
  value: string | string[];
  useCommonOptions?: boolean;
  options: string[];
  style: any;
};

type OpenTextField = {
  type: 'openText';
  label?: string;
  value: string | string[];
  useCommonOptions?: boolean;
  size?: number;
  style: any;
};

type RadioField = {
  type: 'radio';
  value: string;
  options: string[];
  style: any;
};

type MatchField = {
  type: 'match';
  value: string;
  text: string;
  style: any;
};

export type QuestionPart = StaticTextField | NewLineField | SingleChoiceField | OpenTextField | RadioField | MatchField;

export type Question = QuestionPart[];

export type Option = { text: string; value: string };

export type TestItem = {
  id: string | number;
  title?: string;
  fields: QuestionPart[];
};

export type Test = {
  id: string;
  title: string;
  layout?: 'orderedList' | 'article' | 'grid';
  layoutColumns?: number;
  commonOptions?: Array<string | Option>;
  hideCommonOptions?: boolean;
  questions: Question[];
  items: TestItem[];
};
