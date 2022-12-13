const checkJump = require('./task10')

test('[1, 2, 1]', () => {
    expect(checkJump([1, 2, 1])).toBe(true)
})

test('[1, 3, 8, 5, 2]', () => {
    expect(checkJump([1, 3, 8, 5, 2])).toBe(true)
})

test('[1, 7, 3, 5]', () => {
    expect(checkJump([1, 7, 3, 5])).toBe(false)
})

test('[1, 2, 3, 2, 1]', () => {
    expect(checkJump([1, 2, 3, 2, 1])).toBe(true)
})

test('[1, 2, 2, 2, 1]', () => {
    expect(checkJump([1, 2, 2, 2, 1])).toBe(true)
})

test('[0, 1, 0]', () => {
    expect(checkJump([0, 1, 0])).toBe(true)
})

test('[2, 2, 2, 2]', () => {
    expect(checkJump([2, 2, 2, 2])).toBe(false)
})

test('[1, 2, 3]', () => {
    expect(checkJump([1, 2, 3])).toBe(false)
})

test('[1, 2, 3, 2, 1, 2, 3]', () => {
    expect(checkJump([1, 2, 3, 2, 1, 2, 3])).toBe(false)
})

test('[1, 1000, 900, 800]', () => {
    expect(checkJump([1, 1000, 900, 800])).toBe(true)
})

test('[1, 1, 1, 1, 1, 1, 1, 1, 2, 1]', () => {
    expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toBe(true)
})

test('[1, 2, 3, 1, 3, 1]', () => {
    expect(checkJump([1, 2, 3, 1, 3, 1])).toBe(false)
})

test('[1, 3, 2, 5, 4, 3, 2, 1]', () => {
    expect(checkJump([1, 2, 3, 1, 3, 1])).toBe(false)
})

test('[1]', () => {
    expect(checkJump([1])).toBe(false)
})

test('[3, 2, 1]', () => {
    expect(checkJump([3, 2, 1])).toBe(false)
})

test('[2, 2, 1]', () => {
    expect(checkJump([2, 2, 1])).toBe(false)
})

test('[3, 2, 1, 2, 3]', () => {
    expect(checkJump([3, 2, 1, 2, 3])).toBe(false)
})

test('[1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1]', () => {
    expect(checkJump([1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1])).toBe(false)
})

test('[1, 2, 1, 2]', () => {
    expect(checkJump([1, 2, 1, 2])).toBe(false)
})

test('[4, 4, 3, 2, 1]', () => {
    expect(checkJump([4, 4, 3, 2, 1])).toBe(false)
})

test('[]', () => {
    expect(checkJump([])).toBe(false)
})
