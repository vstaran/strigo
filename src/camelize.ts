/**
 * Convert a string to camel case by removing hyphens, underscores, and spaces and capitalizing the next character.
 *
 * @param {string} str - The input string to camelize.
 * @returns {string} The camelized string.
 *
 *
 * @example
 * // Returns 'fooBar'
 * camelize('foo-bar');
 *
 * @example
 * // Returns 'helloWorld'
 * camelize('hello_world');
 *
 * @example
 * // Returns 'myVariableName'
 * camelize('my variable_name');
 */

const camelize = (str: string): string => {
  return str.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
};

export default camelize;
