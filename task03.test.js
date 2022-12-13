const distributeGifts = require('./task03')

test('ejemplo 1', () => {
    const packOfGifts = ["book", "doll", "ball"]
    const reindeers = ["dasher", "dancer"]
    expect(distributeGifts(packOfGifts, reindeers)).toBe(2)
})