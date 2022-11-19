const arrayReplace = require('./arrayReplace')


describe(arrayReplace.name, () => {
    test('Verify arrayReplace() replaces elements in correct position with correct values', () => {
        var tests = [
            {
                name: "first test",
                input: [1, 2, 1],
                replace: 1,
                sub: 3,
                expect: [3, 2, 3]
            },
            {
                name: "second test",
                input: [6, 2, 6],
                replace: 6,
                sub: 4,
                expect: [4, 2, 4]
            },
            {
                name: "last test",
                input: [5, 9, 5],
                replace: 5,
                sub: 7,
                expect: [7, 9, 7]
            },
        ]

        expect(arrayReplace([1, 2, 1], 1, 3)).toEqual([3, 2, 3])

        tests.forEach(test => {
            console.log(test.name + "\n")
            expect(arrayReplace(test.input, test.replace, test.sub)).toEqual(test.expect)
        });
    })
}) 