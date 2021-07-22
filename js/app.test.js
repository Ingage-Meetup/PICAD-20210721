const { computeMinimumAndMaximumSuspects } = require('./app');

// This is a Jest unit test - see https://jestjs.io/docs/en/getting-started for more information
test('4 interviews with minumum 1 and maximum 4 should be 1, 4', () => {
    expect(computeMinimumAndMaximumSuspects(
        [
            "5 10",
            "4",
            "1 8",
            "5 8",
            "7 10",
            "8 9"
        ]
    )).toEqual([1, 4]);
});

test('4 interviews with minumum 1 and maximum 3 should be 1, 3', () => {
    expect(computeMinimumAndMaximumSuspects(
        [
            "5 10",
            "4",
            "1 8",
            "5 6",
            "7 10",
            "8 9"
        ]
    )).toEqual([1, 3]);
});

test('4 interviews with minumum 0 and maximum 3 over a huge interval should be 0, 3', () => {
    expect(computeMinimumAndMaximumSuspects(
        [
            "5 100000000",
            "4",
            "1 8",
            "5 6",
            "7 10",
            "8 9"
        ]
    )).toEqual([0, 3]);
});