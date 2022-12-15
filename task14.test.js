const getOptimalPath = require('./task14')

test('[[0], [2, 3]]', () => {
    expect(getOptimalPath([[0], [2, 3]])).toBe(2)
})

test('[[0], [3, 4], [9, 8, 1]]', () => {
    expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toBe(5)
})

test('[[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]', () => {
    expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toBe(8)
})
