type StaticTextField = {
  type: 'staticText';
  value: string;
  bold?: boolean;
  style: any;
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
  layout?: 'horizontal' | 'vertical';
};

type MatchField = {
  type: 'match';
  value: string;
  text: string;
  style: any;
};

export type TestField = StaticTextField | NewLineField | SingleChoiceField | OpenTextField | RadioField | MatchField;

export type Option = { text: string; value: string };

export type TestItem = {
  id: string | number;
  title?: string;
  fields: TestField[];
};

export type Test = {
  id: string;
  name: string;
  layout?: 'orderedList' | 'article' | 'grid';
  layoutColumns?: number;
  title?: string;
  commonOptions?: Array<string | Option>;
  hideCommonOptions?: boolean;
  items: TestItem[];
};
