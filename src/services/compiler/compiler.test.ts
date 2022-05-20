import { compile } from './compiler';
import { parseFields } from './grammars/fields';
import { parseJson } from './grammars/json';

describe('Chevrotain', () => {
  it('should parse json without errors', () => {
    const jsonString = `{
      "property1": "value"
    }`;

    const result = parseJson(jsonString);

    expect(result.parseErrors).toEqual([]);
  });

  it('should parse fields without errors', () => {
    const text = `What (1) the phrase 'the great British seaside' bring to mind? Most people, if asked
    to respond (2) the top of their heads, associate (3) _ оп holiday to places
    such as Blackpool or Torquay with poor weather, old, faded attractions and a low standard of
    accommodation.These days. when people are more likely to go abroad to (4) .......... the
    sights, traditional British seaside towns (5) suffering from an image problem. Now,
    ﬁnally, some of the resorts (6) .. decided to bring their images up to date in the hope that
    a (7) of direction WIll bring back the tourists. Many will need a lot of convincing, but
    those that (8) ......................... соте will ﬁnd that today's Blackpool differs quite a bit (9)
    the picture postcard past.`;

    const result = parseFields(text);
    // console.log(JSON.stringify(result.cst, null, 2));
    // if (result.lexErrors?.length) console.log(JSON.stringify(result.lexErrors, null, 2));
    // if (result.parseErrors?.length) console.log(JSON.stringify(result.parseErrors, null, 2));

    expect(result).toBeDefined();
    expect(result.parseErrors).toEqual([]);
  });

  it('should compile fields', () => {
    // const text = `What openText{"label":"1"} the phrase 'the great British seaside' bring to mind? Most people, if asked
    // to respond (2) the top of their heads, associate (3) _ оп holiday to places
    // such as Blackpool or Torquay with poor weather, old, faded attractions and a low standard of
    // accommodation.These days. when people are more likely to go abroad to (4) .......... the
    // sights, traditional British seaside towns (5) suffering from an image problem. Now,
    // ﬁnally, some of the resorts (6) .. decided to bring their images up to date in the hope that
    // a (7) of direction WIll bring back the tourists. Many will need a lot of convincing, but
    // those that (8) ......................... соте will ﬁnd that today's Blackpool differs quite a bit (9)
    // the picture postcard past.`;
    const text = `openText{label:"1"}`;

    const result = compile(text);
    console.log(JSON.stringify(result, null, 2));

    expect(result).toBeDefined();
  });
});
