const arrayPreviousLess = require('./arrayPreviousLess')


describe(arrayPreviousLess.name, () => {
    test('Verify array previous less function', () => {
       var  tests = [
        {input: [3,5,2,4,5 ], expect: [-1, 3, -1, 2, 4]},
        {input: [3,4,5,4,5,4 ], expect: [-1, 3, 4, 3, 4,3]}
       ];

       tests.forEach(function (test) {
        expect(arrayPreviousLess(test.input)).toEqual(test.expect)
       })
    })
})