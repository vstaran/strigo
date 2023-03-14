/**
 * Formats a number with a specified number of decimals and thousands separator.
 *
 * @category Price
 * @param {number} number - The number to format.
 * @param {number} [decimals=0] - The number of decimal places to include.
 * @param {string} [decPoint='.'] - The character to use as the decimal point.
 * @param {string} [thousandsSep=' '] - The character to use as the thousands separator.
 * @returns {string} The formatted number as a string.
 * @throws {Error} An error is thrown if decimals argument is a negative integer.
 *
 * @example
 * // Format a positive integer with default arguments
 * numberFormat(1234567); // Returns "1 234 567"
 *
 * @example
 * // Format a negative number with custom arguments
 * numberFormat(-1234.567, 2, ',', '.'); // Returns "-1.234,57"
 *
 * @example
 * // Format a number with no decimals and a different decimal point and thousands separator
 * numberFormat(1234, 0, ',', '.', '-'); // Returns "-1.234"
 */

const numberFormat = (
  numValue: number,
  decimals: number = 0,
  decPoint: string = '.',
  thousandsSep: string = ' ',
): string => {
  if (decimals < 0) {
    throw new Error('Invalid input, decimals argument must be a non-negative integer.');
  }

  const sign: string = numValue < 0 ? '-' : '';
  const sNumber: string = Math.abs(parseInt(numValue.toFixed(decimals), 10)).toString();
  const len: number = sNumber.length;
  const tChunk: number = len > 3 ? len % 3 : 0;
  const chFirst: string = tChunk ? sNumber.substring(0, tChunk) + thousandsSep : '';
  const chRest: string = sNumber.substring(tChunk).replace(/(\d\d\d)(?=\d)/g, '$1' + thousandsSep);
  const chLast: string = decimals
    ? decPoint + (Math.abs(numValue) - parseInt(sNumber, 10)).toFixed(decimals).slice(2)
    : '';

  return sign + chFirst + chRest + chLast;
};

export default numberFormat;
