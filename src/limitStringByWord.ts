/**
 * Limits a given string by a certain number of words.
 *
 * @param {string} text - The string to limit.
 * @param {number} limit - The number of words to limit the string by.
 * @returns {string} The limited string, with three dots appended if the string was truncated.
 *
 *
 * @example
 *
 * // Limit the string to 5 words
 * const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
 * const limitedText = limitStringByWord(text, 5);
 * console.log(limitedText); // Output: "Lorem ipsum dolor sit amet,..."
 */

const limitStringByWord = (text: string, limit: number): string => {
  const words = text.split(' ');
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  }
  return text;
};

export default limitStringByWord;
