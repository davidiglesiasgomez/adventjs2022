const checkPart = require('./task08')

test('uwu', () => {
    expect(checkPart('uwu')).toBe(true)
})

test('miidim', () => {
    expect(checkPart('miidim')).toBe(true)
})

test('midu', () => {
    expect(checkPart('midu')).toBe(false)
})

test('abcdefdcba', () => {
    expect(checkPart('abcdefdcba')).toBe(true)
})
