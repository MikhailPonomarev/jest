const repeatWord = require('../../src/index');

const testWord = 'Test';

test('should repeat word 3 times', () => {
    expect(repeatWord(testWord, 3)).toBe('TestTestTest');
});

test('should not repeat word if repeatCount = 1', () => {
    expect(repeatWord(testWord, 1)).toBe(testWord);
});

test('should return undefined if repeatCount = 0', () => {
    expect(repeatWord(testWord, 0)).toBe(undefined);
});

test('should return undefined if repeatCount < 0', () => {
    expect(repeatWord(testWord, -1)).toBe(undefined);
});
