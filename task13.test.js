const getFilesToBackup = require('./task13')

test('ejemplo 1', () => {
    const lastBackup = 1546300800
    const changes = [
        [ 1, 1546300800 ],
        [ 2, 1546300800 ],
        [ 1, 1546300900 ],
        [ 1, 1546301000 ],
        [ 3, 1546301100 ]
    ]
    expect(getFilesToBackup(lastBackup, changes)).toStrictEqual([1, 3])
})

test('ejemplo 2', () => {
    const lastBackup = 1546300600
    const changes = [
        [ 1, 1546300800 ],
        [ 2, 1546300800 ],
        [ 1, 1546300900 ],
        [ 1, 1546301000 ],
        [ 3, 1546301100 ]
    ]
    expect(getFilesToBackup(lastBackup, changes)).toStrictEqual([1, 2, 3])
})

test('ejemplo 3', () => {
    const lastBackup = 1556300600
    const changes = [
        [ 1, 1546300800 ],
        [ 2, 1546300800 ],
        [ 1, 1546300900 ],
        [ 1, 1546301000 ],
        [ 3, 1546301100 ]
    ]
    expect(getFilesToBackup(lastBackup, changes)).toStrictEqual([])
})

test('ejemplo 4', () => {
    const lastBackup = 1556300600
    const changes = []
    expect(getFilesToBackup(lastBackup, changes)).toStrictEqual([])
})

test('ejemplo 5', () => {
    const lastBackup = 1546300600
    const changes = [
        [ 2, 1546300800 ],
        [ 1, 1546300800 ],
        [ 3, 1546300800 ]
    ]
    expect(getFilesToBackup(lastBackup, changes)).toStrictEqual([1, 2, 3])
})
