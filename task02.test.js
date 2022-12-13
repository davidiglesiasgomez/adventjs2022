const countHours = require('./task02')

test('ejemplo 1', () => {
    const year = 2022
    const holidays = ['01/06', '04/01', '12/25']
    expect(countHours(year, holidays)).toBe(4)
})