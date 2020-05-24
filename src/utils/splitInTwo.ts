export default function splitInTwo(text: string, separator?: string): [string, string | undefined] {
  const separatorIndex = separator ? text.indexOf(separator) : -1;
  if (separatorIndex === -1) {
    return [text, undefined];
  }

  const part1 = text.substr(0, separatorIndex).trim();
  const part2 = text.substr(separatorIndex + 1).trim();
  return [part1, part2];
}
