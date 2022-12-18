const decorateTree = require('./task15')

test('B B', () => {
    expect(decorateTree('B B')).toStrictEqual(['B', 'B B'])
})

test('P P', () => {
    expect(decorateTree('P P')).toStrictEqual(['P', 'P P'])
})

test('R R', () => {
    expect(decorateTree('R R')).toStrictEqual(['R', 'R R'])
})

test('B P', () => {
    expect(decorateTree('B P')).toStrictEqual(['R', 'B P'])
})

test('R P', () => {
    expect(decorateTree('R P')).toStrictEqual(['B', 'R P'])
})

test('B R', () => {
    expect(decorateTree('B R')).toStrictEqual(['P', 'B R'])
})

test('B B B', () => {
    expect(decorateTree('B B B')).toStrictEqual(['B', 'B B', 'B B B'])
})

test('B P R P', () => {
    expect(decorateTree('B P R P')).toStrictEqual(['R', 'P B', 'R B B', 'B P R P'])
})