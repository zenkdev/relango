import { createToken, CstParser, Lexer, Rule } from 'chevrotain';

const AnyText = createToken({ name: 'AnyText', pattern: Lexer.NA });
const Word = createToken({ name: 'Word', pattern: /[\w'`&?.!-]+/, categories: AnyText });
const Textbox = createToken({ name: 'Textbox', pattern: /textbox/, longer_alt: Word });
const Radio = createToken({ name: 'Radio', pattern: /radio/, longer_alt: Word });
const Select = createToken({ name: 'Select', pattern: /select/, longer_alt: Word });
const True = createToken({ name: 'True', pattern: /true/ });
const False = createToken({ name: 'False', pattern: /false/ });
const Null = createToken({ name: 'Null', pattern: /null/ });
const LCurly = createToken({ name: 'LCurly', pattern: /{/ });
const RCurly = createToken({ name: 'RCurly', pattern: /}/ });
const LSquare = createToken({ name: 'LSquare', pattern: /\[/ });
const RSquare = createToken({ name: 'RSquare', pattern: /]/ });
const LParen = createToken({ name: 'LParen', pattern: /\(/, categories: AnyText });
const RParen = createToken({ name: 'RParen', pattern: /\)/, categories: AnyText });
const Comma = createToken({ name: 'Comma', pattern: /,/, categories: AnyText });
const Colon = createToken({ name: 'Colon', pattern: /:/, categories: AnyText });
const SemiColon = createToken({ name: 'SemiColon', pattern: /;/, categories: AnyText });
const Slash = createToken({ name: 'Slash', pattern: /\//, categories: AnyText });
const BoldMd = createToken({ name: 'BoldMd', pattern: /\*\*/ });
const ItalicMd = createToken({ name: 'ItalicMd', pattern: /\*/ });
const StringLiteral = createToken({ name: 'StringLiteral', pattern: /"(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/ });
const NumberLiteral = createToken({ name: 'NumberLiteral', pattern: /-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/, categories: AnyText });
const NewLine = createToken({ name: 'NewLine', pattern: /\r?\n/ });
const WhiteSpace = createToken({ name: 'WhiteSpace', pattern: /[ \t]/, categories: AnyText });

const allTokens = [
  AnyText,
  Textbox,
  Radio,
  Select,
  StringLiteral,
  NumberLiteral,
  True,
  False,
  Null,
  LCurly,
  RCurly,
  LSquare,
  RSquare,
  LParen,
  RParen,
  Comma,
  Colon,
  SemiColon,
  Slash,
  BoldMd,
  ItalicMd,
  Word,
  WhiteSpace,
  NewLine,
];
const FieldsLexer = new Lexer(allTokens);

class FieldsParserTypeScript extends CstParser {
  constructor() {
    super(allTokens);
    this.performSelfAnalysis();
  }

  // In TypeScript the parsing rules are explicitly defined as class instance properties
  // This allows for using access control (public/private/protected) and more importantly "informs" the TypeScript compiler
  // about the API of our Parser, so referencing an invalid rule name (this.SUBRULE(this.oopsType);)
  // is now a TypeScript compilation error.
  public fields = this.RULE('fields', () => {
    this.MANY(() => {
      this.SUBRULE(this.field);
    });
  });

  // example for private access control
  private field = this.RULE('field', () => {
    this.OR([
      // using ES6 Arrow functions to reduce verbosity.
      { ALT: () => this.SUBRULE(this.textbox) },
      { ALT: () => this.SUBRULE(this.radio) },
      { ALT: () => this.SUBRULE(this.select) },
      { ALT: () => this.SUBRULE(this.boldText) },
      { ALT: () => this.SUBRULE(this.italicText) },
      { ALT: () => this.SUBRULE(this.text) },
      { ALT: () => this.CONSUME(NewLine) },
    ]);
  });

  private boldText = this.RULE('boldText', () => {
    this.CONSUME(BoldMd);
    this.SUBRULE(this.text);
    this.CONSUME2(BoldMd);
  });

  private italicText = this.RULE('italicText', () => {
    this.CONSUME(ItalicMd);
    this.SUBRULE(this.text);
    this.CONSUME2(ItalicMd);
  });

  private text = this.RULE('text', () => {
    this.CONSUME(AnyText);
    this.OPTION(() => {
      this.MANY(() => {
        this.CONSUME2(AnyText);
      });
    });
  });

  private textbox = this.RULE('textbox', () => {
    this.CONSUME(Textbox);
    this.CONSUME(LParen);
    this.OPTION(() => {
      this.SUBRULE(this.value);
      this.MANY(() => {
        this.CONSUME(SemiColon);
        this.SUBRULE2(this.value);
      });
    });
    this.CONSUME(RParen);
  });

  private radio = this.RULE('radio', () => {
    this.CONSUME(Radio);
    this.CONSUME(LParen);
    this.OPTION(() => {
      this.SUBRULE(this.value);
      this.MANY(() => {
        this.CONSUME(SemiColon);
        this.SUBRULE2(this.value);
      });
    });
    this.CONSUME(RParen);
  });

  private select = this.RULE('select', () => {
    this.CONSUME(Select);
    this.CONSUME(LParen);
    this.OPTION(() => {
      this.SUBRULE(this.value);
      this.MANY(() => {
        this.CONSUME(SemiColon);
        this.SUBRULE2(this.value);
      });
    });
    this.CONSUME(RParen);
  });

  private object = this.RULE('object', () => {
    this.CONSUME(LCurly);
    this.OPTION(() => {
      this.SUBRULE(this.objectItem);
      this.MANY(() => {
        this.CONSUME(Comma);
        this.SUBRULE2(this.objectItem);
      });
    });
    this.CONSUME(RCurly);
  });

  private objectItem = this.RULE('objectItem', () => {
    this.CONSUME(StringLiteral);
    this.CONSUME(Colon);
    this.SUBRULE(this.value);
  });

  private array = this.RULE('array', () => {
    this.CONSUME(LSquare);
    this.OPTION(() => {
      this.SUBRULE(this.value);
      this.MANY(() => {
        this.CONSUME(Comma);
        this.SUBRULE2(this.value);
      });
    });
    this.CONSUME(RSquare);
  });

  private value = this.RULE('value', () => {
    this.OR([
      { ALT: () => this.CONSUME(StringLiteral) },
      { ALT: () => this.CONSUME(NumberLiteral) },
      { ALT: () => this.SUBRULE(this.object) },
      { ALT: () => this.SUBRULE(this.array) },
      { ALT: () => this.CONSUME(True) },
      { ALT: () => this.CONSUME(False) },
      { ALT: () => this.CONSUME(Null) },
    ]);
  });
}

// reuse the same parser instance.
export const parser = new FieldsParserTypeScript();

export const productions: Record<string, Rule> = parser.getGAstProductions();

export function parseText(text: string) {
  const lexResult = FieldsLexer.tokenize(text);
  // setting a new input will RESET the parser instance's state.
  parser.input = lexResult.tokens;
  // any top level rule may be used as an entry point
  const cst = parser.fields();

  // this would be a TypeScript compilation error because our parser now has a clear API.
  // let value = parser.json_OopsTypo()

  return {
    // This is a pure grammar, the value will be undefined until we add embedded actions
    // or enable automatic CST creation.
    cst: cst,
    lexErrors: lexResult.errors,
    parseErrors: parser.errors,
  };
}
