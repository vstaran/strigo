import countWords from "../src/countWords"

describe('countWords', () => {
    test('counts the number of words in a string', () => {
        const text = 'This is a test string with six words.';
        const numWords = countWords(text);
        expect(numWords).toBe(8);
    });
  
    test('handles empty strings', () => {
        const text = '';
        const numWords = countWords(text);
        expect(numWords).toBe(0);
    });
  
    test('handles strings with only whitespace', () => {
        const text = '     \n   \t  \r   ';
        const numWords = countWords(text);
        expect(numWords).toBe(0);
    });
  
    test('handles strings with non-alphanumeric characters', () => {
        const text = 'This string, has some non-alphanumeric-characters! Yes it does.';
        const numWords = countWords(text);
        expect(numWords).toBe(8);
    });

});