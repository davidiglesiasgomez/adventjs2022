const wrapping = require('./task01')

test('ejemplo 1', () => {
    const gifts = ['cat', 'game', 'socks']
    expect(wrapping(gifts)).toStrictEqual(["*****\n*cat*\n*****", "******\n*game*\n******", "*******\n*socks*\n*******"])
})