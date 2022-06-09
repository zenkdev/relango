import compilerService from './CompilerService';

describe('CompilerService', () => {
  it('should compile tests', () => {
    const text = `
---
- id: A
  name: Circle the correct word or phrase.
  layout: list
  items:
    - |
      **What** textbox("does") the phrase 'the great British seaside' bring to mind?
      It's the first time textbox("I've ever eaten") **(I / ever / eat)** octopus!
    - |
      Everyone textbox("knows";true) about the stunning sights to see in Moscow and St. Petersburg.
      Unfortunately, the 2700 km journey from Moscow just textbox(["looks","seems"];true) too far for many travellers to Russia.
      Let's go to the airport to textbox("see";true) Grandpa off when he flies back home.
...`;

    const result = compilerService.compile(text);
    // console.log(JSON.stringify(result, null, 2));

    expect(result).toBeDefined();
  });

  it('should compile fields', () => {
    const text = `**What** textbox("does") the phrase 'the great British seaside' bring to mind?
    It's the first time textbox("I've ever eaten") **(I / ever / eat)** octopus!
    Everyone textbox("knows";true) about the stunning sights to see in Moscow and St. Petersburg.
    Unfortunately, the 2700 km journey from Moscow just textbox(["looks","seems"];true) too far for many travellers to Russia.
    Let's go to the airport to textbox("see";true) Grandpa off when he flies back home.`;

    const result = compilerService['fields'](text);

    expect(result).toBeDefined();
  });

  it('should compile empty fields', () => {
    const text = ``;

    const result = compilerService['fields'](text);

    expect(result).toBeDefined();
  });
});
