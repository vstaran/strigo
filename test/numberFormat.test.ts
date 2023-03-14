import numberFormat from '../src/numberFormat';

describe('numberFormat', () => {
    it('formats positive integers correctly', () => {
        expect(numberFormat(123456789)).toBe('123 456 789');
    });

    it('formats negative integers correctly', () => {
        expect(numberFormat(-123456789)).toBe('-123 456 789');
    });

    it('formats positive numbers with decimals correctly', () => {
        expect(numberFormat(1234.5678, 2)).toBe('1 234.57');
    });

    it('formats negative numbers with decimals correctly', () => {
        expect(numberFormat(-1234.5678, 2)).toBe('-1 234.57');
    });

    it('formats zero correctly', () => {
        expect(numberFormat(0)).toBe('0');
    });

    it('formats positive integers with a different thousands separator', () => {
        expect(numberFormat(123456789, 0, ',', '.')).toBe('123.456.789');
    });

    it('formats positive numbers with more decimals', () => {
        expect(numberFormat(1234.5678, 5, '.', ',')).toBe('1,234.56780');
    });

    it('formats negative numbers with more decimals and a different thousands separator', () => {
        expect(numberFormat(-1234.5678, 4, ',', ' ')).toBe('-1 234,5678');
    });

    it('formats numbers with no decimals and a different decimal point', () => {
        expect(numberFormat(1234, 0, ',', '.')).toBe('1.234');
    });

    it('throws an error if the decimals argument is negative', () => {
        expect(() => numberFormat(1234, -2)).toThrow('Invalid input, decimals argument must be a non-negative integer.');
    });
});