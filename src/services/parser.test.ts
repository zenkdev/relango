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
});
