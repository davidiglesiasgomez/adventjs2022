const dryNumber = require('./task18')

test("1, 15", () => {
    expect(dryNumber(1, 15)).toStrictEqual([1, 10, 11, 12, 13, 14, 15])
})

test("2, 20", () => {
    expect(dryNumber(2, 20)).toStrictEqual([2, 12, 20])
})
