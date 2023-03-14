/**
 * Counts the number of words in a given string.
 *
 * @category Text
 * @param {string} text - The input string to count the words of.
 * @returns {number} The number of words in the input string.
 *
 *
 * @example
 * const numWords = countWords("This is an example sentence.");
 * console.log(numWords); // Output: 5
 */

const countWords = (text: string): number => {
  // Remove all non-alphanumeric characters except for spaces
  const cleanedText = text.trim().replace(/[^\w\s]/g, '');

  if (cleanedText === '') {
    return 0;
  }

  // Split the text by spaces and count the resulting array
  const words = cleanedText.split(/\s+/);
  return words.length;
};

export default countWords;
