import { CstNode, IToken } from 'chevrotain';

import { parseFields } from './grammars/fields';

interface StaticText {
  type: 'staticText';
  value: string;
  bold?: boolean;
  style: unknown;
}

interface NewLine {
  type: 'newLine';
}

type SingleChoiceField = {
  type: 'singleChoice';
  taskId: string | number;
  value: string | string[];
  useCommonOptions?: boolean;
  options: string[];
  style: unknown;
};

type OpenTextField = {
  type: 'openText';
  label?: string;
  value: string | string[];
  useCommonOptions?: boolean;
  size?: number;
  style: unknown;
};

type RadioField = {
  type: 'radio';
  value: string;
  options: string[];
  style: unknown;
  layout?: 'horizontal' | 'vertical';
};

type MatchField = {
  type: 'match';
  value: string;
  text: string;
  style: unknown;
};

export type Field = StaticText | NewLine | SingleChoiceField | OpenTextField | RadioField | MatchField;

export function compile(text: string): Field[] {
  const { cst, lexErrors, parseErrors } = parseFields(text);

  if (lexErrors?.length) throw new Error(`Lex errors: ${JSON.stringify(lexErrors, null, 2)}`);
  if (parseErrors?.length) throw new Error(`Parse errors: ${JSON.stringify(parseErrors, null, 2)}`);

  const fields: Field[] = [];

  for (const line of cst.children.line) {
    for (const key of Object.keys((line as CstNode).children)) {
      const { image } = (line as CstNode).children[key][0] as IToken;
      switch (key) {
        case 'NewLine':
          fields.push({ type: 'newLine' });
          break;

        default:
          fields.push({ type: 'staticText', value: image, style: {} });
          break;
      }
    }
  }

  return fields;
}
