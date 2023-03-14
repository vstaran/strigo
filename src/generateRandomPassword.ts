/**
 * Generates a random password of a given length, consisting of alphanumeric characters and special symbols.
 *
 * @category Text
 * @param {number} length - The length of the password to be generated.
 * @returns {string} The random password generated.
 * @throws {Error} Throws an error if the length parameter is not an integer or if it is less than or equal to zero.
 *
 *
 * @example
 * // Generate a random password of length 10
 * const password = generateRandomPassword(10);
 * console.log(password); // Example output: "uJ7P#f@Kz$"
 */

const generateRandomPassword = (length: number): string => {
  if (!Number.isInteger(length)) {
    throw new Error('Password length must be an integer');
  }

  if (length <= 0) {
    throw new Error('Password length must be greater than zero');
  }

  const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><,./-=';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
};

export default generateRandomPassword;
