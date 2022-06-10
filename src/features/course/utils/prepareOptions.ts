import { Option, Test } from '../../../models';

export default function prepareOptions(options: Test['commonOptions']): Option[] | undefined {
  if (options) {
    return options.map(option => (typeof option === 'string' ? { text: option, value: option } : option));
  }

  return undefined;
}
