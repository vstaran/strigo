import generateRandomPassword from '../src/generateRandomPassword';

describe('generateRandomPassword', () => {
  it('returns a string of the correct length', () => {
    const length = 10;
    const password = generateRandomPassword(length);
    expect(password).toHaveLength(length);
  });

  it('returns a different string each time it is called', () => {
    const length = 10;
    const password1 = generateRandomPassword(length);
    const password2 = generateRandomPassword(length);
    expect(password1).not.toEqual(password2);
  });

  it('returns a string that only contains characters from the allowed set', () => {
    const length = 10;
    const allowedChars = /^[a-zA-Z0-9~!@#$%^&*()_+-=[\]{};':"\\|,.<>/?]+$/;
    const password = generateRandomPassword(length);
    expect(password).toMatch(allowedChars);
  });

  it('returns a string that does not contain whitespace', () => {
    const length = 10;
    const password = generateRandomPassword(length);
    const hasWhitespace = /\s/.test(password);
    expect(hasWhitespace).toBe(false);
  });

  it('throws an error when length is zero', () => {
    expect(() => generateRandomPassword(0)).toThrowError(
      'Password length must be greater than zero'
    );
  });

  it('throws an error when length is negative', () => {
    expect(() => generateRandomPassword(-1)).toThrowError(
      'Password length must be greater than zero'
    );
  });

  it('throws an error when length is not an integer', () => {
    expect(() => generateRandomPassword(3.5)).toThrowError(
      'Password length must be an integer'
    );
  });

  it('throws an error if length is negative', () => {
    const length = -1;
    expect(() => generateRandomPassword(length)).toThrow();
  });


});
