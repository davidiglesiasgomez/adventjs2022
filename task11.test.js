const getCompleted = require('./task11');

test('01:00:00 03:00:00', () => {
    expect(getCompleted('01:00:00', '03:00:00')).toBe('1/3')
});

test('02:00:00 04:00:00', () => {
    expect(getCompleted('02:00:00', '04:00:00')).toBe('1/2')
});

test('01:00:00 01:00:00', () => {
    expect(getCompleted('01:00:00', '01:00:00')).toBe('1/1')
});

test('00:10:00 01:00:00', () => {
    expect(getCompleted('00:10:00', '01:00:00')).toBe('1/6')
});

test('01:10:10 03:30:30', () => {
    expect(getCompleted('01:10:10', '03:30:30')).toBe('1/3')
});

test('03:30:30 05:50:50', () => {
    expect(getCompleted('03:30:30', '05:50:50')).toBe('3/5')
});
