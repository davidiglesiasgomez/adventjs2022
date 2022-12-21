const sortToys = require('./task19')

test("['ball', 'doll', 'car', 'puzzle'] [2, 3, 1, 0]", () => {
    const toys = ['ball', 'doll', 'car', 'puzzle']
    const positions = [2, 3, 1, 0]
    expect(sortToys(toys, positions)).toStrictEqual(['puzzle', 'car', 'ball', 'doll'])
})

test("['pc', 'xbox', 'ps4', 'switch', 'nintendo'] [8, 6, 5, 7, 9]", () => {
    const toys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
    const positions = [8, 6, 5, 7, 9]
    expect(sortToys(toys, positions)).toStrictEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo'])
})
