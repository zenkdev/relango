import { createToken, CstParser, Lexer, Rule } from 'chevrotain';

const OpenText = createToken({ name: 'OpenText', pattern: /openText/ });
const True = createToken({ name: 'True', pattern: /true/ });
const False = createToken({ name: 'False', pattern: /false/ });
const LCurly = createToken({ name: 'LCurly', pattern: /{/ });
const RCurly = createToken({ name: 'RCurly', pattern: /}/ });
const Comma = createToken({ name: 'Comma', pattern: /,/ });
const Colon = createToken({ name: 'Colon', pattern: /:/ });
const Text = createToken({ name: 'Text', pattern: /[^\n\r"]+/ });
const StringLiteral = createToken({
  name: 'StringLiteral',
  pattern: /"(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/,
  longer_alt: Text,
});
const NumberLiteral = createToken({
  name: 'NumberLiteral',
  pattern: /-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/,
});
const NewLine = createToken({
  name: 'NewLine',
  pattern: /\r?\n/,
});
const allTokens = [OpenText, StringLiteral, NumberLiteral, True, False, LCurly, RCurly, Comma, Colon, Text, NewLine];
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
      this.OR([
        // using ES6 Arrow functions to reduce verbosity.
        { ALT: () => this.SUBRULE(this.openText) },
        { ALT: () => this.SUBRULE(this.line) },
        //   // { ALT: () => this.CONSUME(Text) },
        //   // { ALT: () => this.CONSUME(NewLine) },
      ]);
    });
  });

  // example for private access control
  private line = this.RULE('line', () => {
    this.CONSUME(Text);
    this.OPTION(() => {
      this.CONSUME(NewLine);
    });
  });

  private openText = this.RULE('openText', () => {
    this.CONSUME(OpenText);
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

  private value = this.RULE('value', () => {
    this.OR([
      { ALT: () => this.CONSUME(StringLiteral) },
      { ALT: () => this.CONSUME(NumberLiteral) },
      { ALT: () => this.CONSUME(True) },
      { ALT: () => this.CONSUME(False) },
    ]);
  });
}

// reuse the same parser instance.
export const parser = new FieldsParserTypeScript();

export const productions: Record<string, Rule> = parser.getGAstProductions();

export function parseFields(text: string) {
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
