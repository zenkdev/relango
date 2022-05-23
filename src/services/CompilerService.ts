import { FieldsCstNode, RadioCstNode, TextboxCstNode, TextCstNode } from '../parser_cst';
import { parseText } from './parser';

interface TextboxField {
  type: 'textbox';
  label?: string;
  value: string | string[];
  useCommonOptions?: boolean;
  size?: number;
}

interface RadioField {
  type: 'radio';
  value: string;
  options: string[];
  layout?: 'horizontal' | 'vertical';
}

interface TextField {
  type: 'text';
  value: string;
  bold?: boolean;
  italic?: boolean;
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
  style: unknown;
};

type MatchField = {
  type: 'match';
  value: string;
  text: string;
  style: unknown;
};

export type Field = TextboxField | RadioField | TextField | NewLineField | SingleChoiceField | MatchField;

function unquote(value?: string) {
  if (value && value[0] === '"' && value[value.length - 1] === '"') {
    return value.substring(1, value.length - 1);
  }
  return value;
}

function ensureArray<T>(value: T | T[]): T[] {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
}

class CompilerService {
  constructor() {
    this.compile = this.compile.bind(this);
  }

  public compile(text: string): Field[] {
    const result = parseText(text);

    if (result.lexErrors?.length) throw new Error(`Lex errors: ${JSON.stringify(result.lexErrors, null, 2)}`);
    if (result.parseErrors?.length) throw new Error(`Parse errors: ${JSON.stringify(result.parseErrors, null, 2)}`);
    //console.log('cst', JSON.stringify(result.cst, null, 2));

    const cst = result.cst as FieldsCstNode;
    const fields: Field[] = [];

    if (!cst.children.field) {
      return fields;
    }

    for (const field of cst.children.field) {
      if (field.children.textbox) {
        fields.push(this.createTextboxField(field.children.textbox));
      } else if (field.children.radio) {
        fields.push(this.createRadioField(field.children.radio));
      } else if (field.children.text) {
        fields.push(this.createTextField(field.children.text));
      } else if (field.children.boldText) {
        fields.push(this.createTextField(field.children.boldText[0].children.text, { bold: true }));
      } else if (field.children.italicText) {
        fields.push(this.createTextField(field.children.italicText[0].children.text, { italic: true }));
      } else if (field.children.NewLine) {
        fields.push({ type: 'newLine' });
      }
    }

    return fields;
  }

  private createTextboxField([textbox]: TextboxCstNode[]): TextboxField {
    const params = textbox.children.value!;

    let label: string | undefined = undefined;
    if (params.length > 1 && (params[1].children.StringLiteral || params[1].children.array)) {
      label = unquote(params[0].children.StringLiteral?.[0].image);
      params.shift();
    }

    let value: string | string[] = '';
    if (params[0].children.StringLiteral) {
      value = unquote(params[0].children.StringLiteral[0].image) ?? '';
    } else if (params[0].children.array) {
      value = [];
      const arrValue = params[0].children.array[0]?.children?.value ?? [];
      for (let n = 0; n < arrValue.length; n += 1) {
        const valueChildren = arrValue[n].children;
        if (valueChildren.StringLiteral) {
          value.push(unquote(valueChildren.StringLiteral[0].image) ?? '');
        }
      }
    }

    let useCommonOptions: boolean | undefined = undefined;
    if (params.length > 1 && (params[1].children.True || params[1].children.False)) {
      useCommonOptions = !!params[1].children.True;
    }

    const size = Math.max(...ensureArray(value).map(value => value.length), 20);

    return {
      type: 'textbox',
      label,
      value,
      size,
      useCommonOptions,
    };
  }

  private createRadioField([radio]: RadioCstNode[]): RadioField {
    const params = radio.children.value!;

    const value = unquote(params[0].children.StringLiteral?.[0].image) ?? '';

    const options: string[] = [];
    if (params[1].children.array) {
      const arrValue = params[1].children.array[0]?.children?.value ?? [];
      for (let n = 0; n < arrValue.length; n += 1) {
        const valueChildren = arrValue[n].children;
        if (valueChildren.StringLiteral) {
          options.push(unquote(valueChildren.StringLiteral[0].image) ?? '');
        }
      }
    }

    let layout: RadioField['layout'] = undefined;
    if (params.length > 2 && (params[2].children.True || params[2].children.False)) {
      layout = params[2].children.True ? 'horizontal' : 'vertical';
    }

    return {
      type: 'radio',
      value,
      options,
      layout,
    };
  }

  private createTextField([text]: TextCstNode[], { bold, italic }: { bold?: boolean; italic?: boolean } = {}): TextField {
    const { AnyText } = text.children;
    return {
      type: 'text',
      value: AnyText.map(value => value.image).join(''),
      bold,
      italic,
    };
  }
}

export default new CompilerService();
