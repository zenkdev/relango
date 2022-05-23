import type { CstNode, ICstVisitor, IToken } from "chevrotain";

export interface FieldsCstNode extends CstNode {
  name: "fields";
  children: FieldsCstChildren;
}

export type FieldsCstChildren = {
  field?: FieldCstNode[];
};

export interface FieldCstNode extends CstNode {
  name: "field";
  children: FieldCstChildren;
}

export type FieldCstChildren = {
  textbox?: TextboxCstNode[];
  radio?: RadioCstNode[];
  boldText?: BoldTextCstNode[];
  italicText?: ItalicTextCstNode[];
  text?: TextCstNode[];
  NewLine?: IToken[];
};

export interface BoldTextCstNode extends CstNode {
  name: "boldText";
  children: BoldTextCstChildren;
}

export type BoldTextCstChildren = {
  BoldMd: (IToken)[];
  text: TextCstNode[];
};

export interface ItalicTextCstNode extends CstNode {
  name: "italicText";
  children: ItalicTextCstChildren;
}

export type ItalicTextCstChildren = {
  ItalicMd: (IToken)[];
  text: TextCstNode[];
};

export interface TextCstNode extends CstNode {
  name: "text";
  children: TextCstChildren;
}

export type TextCstChildren = {
  AnyText: (IToken)[];
};

export interface TextboxCstNode extends CstNode {
  name: "textbox";
  children: TextboxCstChildren;
}

export type TextboxCstChildren = {
  Textbox: IToken[];
  LParen: IToken[];
  value?: (ValueCstNode)[];
  SemiColon?: IToken[];
  RParen: IToken[];
};

export interface RadioCstNode extends CstNode {
  name: "radio";
  children: RadioCstChildren;
}

export type RadioCstChildren = {
  Textbox: IToken[];
  LParen: IToken[];
  value?: (ValueCstNode)[];
  SemiColon?: IToken[];
  RParen: IToken[];
};

export interface ObjectCstNode extends CstNode {
  name: "object";
  children: ObjectCstChildren;
}

export type ObjectCstChildren = {
  LCurly: IToken[];
  objectItem?: (ObjectItemCstNode)[];
  Comma?: IToken[];
  RCurly: IToken[];
};

export interface ObjectItemCstNode extends CstNode {
  name: "objectItem";
  children: ObjectItemCstChildren;
}

export type ObjectItemCstChildren = {
  StringLiteral: IToken[];
  Colon: IToken[];
  value: ValueCstNode[];
};

export interface ArrayCstNode extends CstNode {
  name: "array";
  children: ArrayCstChildren;
}

export type ArrayCstChildren = {
  LSquare: IToken[];
  value?: (ValueCstNode)[];
  Comma?: IToken[];
  RSquare: IToken[];
};

export interface ValueCstNode extends CstNode {
  name: "value";
  children: ValueCstChildren;
}

export type ValueCstChildren = {
  StringLiteral?: IToken[];
  NumberLiteral?: IToken[];
  object?: ObjectCstNode[];
  array?: ArrayCstNode[];
  True?: IToken[];
  False?: IToken[];
  Null?: IToken[];
};

export interface ICstNodeVisitor<IN, OUT> extends ICstVisitor<IN, OUT> {
  fields(children: FieldsCstChildren, param?: IN): OUT;
  field(children: FieldCstChildren, param?: IN): OUT;
  boldText(children: BoldTextCstChildren, param?: IN): OUT;
  italicText(children: ItalicTextCstChildren, param?: IN): OUT;
  text(children: TextCstChildren, param?: IN): OUT;
  textbox(children: TextboxCstChildren, param?: IN): OUT;
  radio(children: RadioCstChildren, param?: IN): OUT;
  object(children: ObjectCstChildren, param?: IN): OUT;
  objectItem(children: ObjectItemCstChildren, param?: IN): OUT;
  array(children: ArrayCstChildren, param?: IN): OUT;
  value(children: ValueCstChildren, param?: IN): OUT;
}
