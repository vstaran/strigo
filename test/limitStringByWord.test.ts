import limitStringByWord from '../src/limitStringByWord';

describe('limitStringByWord function', () => {
    it('should return the original string if limit is greater than or equal to the number of words in the string', () => {
        const text = 'Lorem ipsum dolor sit amet';
        expect(limitStringByWord(text, 5)).toBe(text);
        expect(limitStringByWord(text, 6)).toBe(text);
    });

    it('should limit the string to the specified number of words and append three dots', () => {
        const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
        const expected = 'Lorem ipsum dolor sit amet, consectetur...';
        expect(limitStringByWord(text, 6)).toBe(expected);
    });

    it('should handle strings that end with spaces correctly', () => {
        const text = 'Lorem ipsum dolor sit amet    ';
        const expected = 'Lorem ipsum...';
        expect(limitStringByWord(text, 2)).toBe(expected);
    });

    it('should handle strings that contain line breaks correctly', () => {
        const text = 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.';
        const expected = 'Lorem ipsum dolor...';
        expect(limitStringByWord(text, 3)).toBe(expected);
    });
});