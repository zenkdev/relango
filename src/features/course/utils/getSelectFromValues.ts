type Values = Record<string, string>;

export default function getSelectedFromValues(values: Values | undefined, commonOptionNames: string[]): string[] {
  const selected: string[] = [];

  if (values) {
    Object.entries(values).forEach(([key, value]) => {
      if (commonOptionNames.includes(key)) {
        selected.push(value);
      }
    });
  }

  return selected;
}
