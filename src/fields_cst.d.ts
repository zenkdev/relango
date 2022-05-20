import type { CstNode, ICstVisitor, IToken } from "chevrotain";

export interface FieldsCstNode extends CstNode {
  name: "fields";
  children: FieldsCstChildren;
}

export type FieldsCstChildren = {
  openText?: OpenTextCstNode[];
  line?: LineCstNode[];
};

export interface LineCstNode extends CstNode {
  name: "line";
  children: LineCstChildren;
}

export type LineCstChildren = {
  Text: IToken[];
  NewLine?: IToken[];
};

export interface OpenTextCstNode extends CstNode {
  name: "openText";
  children: OpenTextCstChildren;
}

export type OpenTextCstChildren = {
  OpenText: IToken[];
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

export interface ValueCstNode extends CstNode {
  name: "value";
  children: ValueCstChildren;
}

export type ValueCstChildren = {
  StringLiteral?: IToken[];
  NumberLiteral?: IToken[];
  True?: IToken[];
  False?: IToken[];
};

export interface ICstNodeVisitor<IN, OUT> extends ICstVisitor<IN, OUT> {
  fields(children: FieldsCstChildren, param?: IN): OUT;
  line(children: LineCstChildren, param?: IN): OUT;
  openText(children: OpenTextCstChildren, param?: IN): OUT;
  objectItem(children: ObjectItemCstChildren, param?: IN): OUT;
  value(children: ValueCstChildren, param?: IN): OUT;
}
