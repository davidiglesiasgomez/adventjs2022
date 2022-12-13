const selectSleigh = require('./task12');

test('Ejemplo', () => {
    const distance = 30
    const sleighs = [
      { name: "Dasher", consumption: 0.3 },
      { name: "Dancer", consumption: 0.5 },
      { name: "Rudolph", consumption: 0.7 },
      { name: "Midu", consumption: 1 }
    ]
    expect(selectSleigh(distance, sleighs)).toBe('Dancer')
});