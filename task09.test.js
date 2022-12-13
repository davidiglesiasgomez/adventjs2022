const countTime = require('./task09');

test('[1, 1, 1, 1, 1]', () => {
    expect(countTime([1, 1, 1, 1, 1])).toBe(0)
});

test('[0, 1, 1, 0, 1]', () => {
    expect(countTime([0, 1, 1, 0, 1])).toBe(7)
});

test('[0, 0, 0, 1]', () => {
    expect(countTime([0, 0, 0, 1])).toBe(21)
});

test('[0, 0, 1, 0, 0]', () => {
    expect(countTime([0, 0, 1, 0, 0])).toBe(28)
});