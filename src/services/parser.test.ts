import { parseText } from './parser';

describe('parser', () => {
  it('should parse text without errors', () => {
    const text = `**What** textbox("does") the phrase 'the great British seaside' bring to mind?
Everyone textbox("knows";true) about the stunning sights to see in Moscow and St. Petersburg.
Unfortunately, the 2700 km journey from Moscow just textbox(["looks","seems"];true) too far for many travellers to Russia.`;

    const result = parseText(text);

    expect(result).toBeDefined();
    expect(result.parseErrors).toEqual([]);
  });
  it('should parse match field', () => {
    const text = `That was the great match.\nmatch("A";"Some text")`;

    const result = parseText(text);

    expect(result).toBeDefined();
    expect(result.parseErrors).toEqual([]);
    expect(result.cst.children.field).toBeDefined();
    const [field0, field1, field2, ...rest] = result.cst.children.field as any[];
    expect(field0.children.text).toBeDefined();
    expect(field1.children.NewLine).toBeDefined();
    expect(field2.children.match).toBeDefined();
    expect(rest).toEqual([]);
  });
});
