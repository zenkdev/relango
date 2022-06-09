import { CSSProperties } from 'react';

export interface TextboxField {
  type: 'textbox';
  value: string | string[];
  useCommonOptions?: boolean;
  size?: number;
  style?: CSSProperties;
}

export interface RadioField {
  type: 'radio';
  value: string;
  options: string[];
  style?: CSSProperties;
}

export interface TextField {
  type: 'text';
  value: string;
  bold?: boolean;
  italic?: boolean;
  style?: CSSProperties;
}

export interface SelectField {
  type: 'select';
  value: string | string[];
  options?: string[];
  style?: CSSProperties;
}

interface NewLineField {
  type: 'newLine';
}

type MatchField = {
  type: 'match';
  value: string;
  text: string;
  style: any;
};

export type TestField = TextboxField | RadioField | SelectField | TextField | NewLineField | MatchField;

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
  layout: 'article' | 'list';
  layoutColumns?: number;
  listStart?: number;
  title?: string;
  footnote?: string;
  commonOptions?: Array<string | Option>;
  hideCommonOptions?: boolean;
  items: TestItem[];
};
