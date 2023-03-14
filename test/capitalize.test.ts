import capitalize from '../src/capitalize';

describe('capitalize', () => {
  it('capitalizes the first letter of a word', () => {
    expect(capitalize('hello')).toEqual('Hello');
  });

  it('does not modify the rest of the string', () => {
    expect(capitalize('hello world')).toEqual('Hello world');
  });

  it('handles empty strings', () => {
    expect(capitalize('')).toEqual('');
  });

  it('handles strings with only one character', () => {
    expect(capitalize('a')).toEqual('A');
  });

  it('handles strings with non-alphabetic characters', () => {
    expect(capitalize('123abc')).toEqual('123abc');
  });
});