import { CSSProperties } from 'react';

interface TextboxField {
  type: 'textbox';
  label?: string;
  value: string | string[];
  useCommonOptions?: boolean;
  size?: number;
  style?: CSSProperties;
}

interface RadioField {
  type: 'radio';
  value: string;
  options: string[];
  layout?: 'horizontal' | 'vertical';
  style?: CSSProperties;
}

interface TextField {
  type: 'text';
  value: string;
  bold?: boolean;
  italic?: boolean;
  style?: CSSProperties;
}

interface NewLineField {
  type: 'newLine';
}

type SingleChoiceField = {
  type: 'singleChoice';
  taskId: string | number;
  value: string | string[];
  useCommonOptions?: boolean;
  options: string[];
  style: any;
};

type MatchField = {
  type: 'match';
  value: string;
  text: string;
  style: any;
};

export type TestField = TextboxField | RadioField | TextField | NewLineField | SingleChoiceField | MatchField;

export interface Option {
  text: string;
  value: string;
}

export interface TestItem {
  id: string | number;
  fields: TestField[];
}

export type Test = {
  id: string;
  name: string;
  layout?: 'orderedList' | 'article' | 'grid';
  layoutColumns?: number;
  title?: string;
  footnote?: string;
  commonOptions?: Array<string | Option>;
  hideCommonOptions?: boolean;
  items: TestItem[];
};
