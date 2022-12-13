const checkJump = require('./task10')

test('[1, 3, 8, 5, 2]', () => {
    expect(checkJump([1, 3, 8, 5, 2])).toBe(true)
})

test('[1, 7, 3, 5]', () => {
    expect(checkJump([1, 7, 3, 5])).toBe(false)
})