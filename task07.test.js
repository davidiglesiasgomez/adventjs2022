const getGiftsToRefill = require('./task07')

test('ejemplo 1', () => {
    const a1 = ['bici', 'coche', 'bici', 'bici']
    const a2 = ['coche', 'bici', 'muñeca', 'coche']
    const a3 = ['bici', 'pc', 'pc']
    expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual(['muñeca', 'pc'])
})
