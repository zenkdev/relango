export default function safeStringify(object: any) {
  let result: string;

  try {
    result = JSON.stringify(object);
    return result;
  } catch (error) {
    // empty block
  }

  const simpleObject: any = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const prop in object) {
    if (!Object.prototype.hasOwnProperty.call(object, prop)) {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (typeof object[prop] === 'object') {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (typeof object[prop] === 'function') {
      // eslint-disable-next-line no-continue
      continue;
    }
    simpleObject[prop] = object[prop];
  }

  result = `[***Sanitized Object***]: ${JSON.stringify(simpleObject)}`;

  return result;
}
