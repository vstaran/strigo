/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 *
 *
 * @example
 * const myString = 'hello, world';
 * const capitalizedString = capitalize(myString); // 'Hello, world'
 * console.log(capitalizedString);
 */

const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capitalize;
