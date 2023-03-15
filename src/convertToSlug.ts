import translit from './translit';

/**
 * A utility function that converts a given string to a slug, which can be used as a part of a URL or a file name.
 *
 * The function takes a title string as input and performs the following operations:
 * - Converts the string to lowercase
 * - Removes any non-word, non-space, and non-Cyrillic characters from the string
 * - Replaces spaces and underscores with a hyphen
 * - Trims any trailing whitespace from the resulting string
 *
 * @category Url
 * @param {string} title - the input string that needs to be converted to a slug
 * @return {string} the resulting slug string
 *
 *
 * @example
 *
 * convertToSlug("Садок вишневий коло хати")
 * // => sadok-vishnevii-kolo-hati
 */

const convertToSlug = (text: string): string => {
  text = text.toString().toLowerCase().trim();
  text = translit(text);

  return text
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^-a-zа-я\u0370-\u03ff\u1f00-\u1fff]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

export default convertToSlug;
