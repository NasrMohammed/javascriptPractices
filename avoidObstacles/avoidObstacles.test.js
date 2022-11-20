const avoidObstacles = require('./avoidObstacles')

describe(avoidObstacles.name, () => {

    test('get the shortest way to jump all the obstacles', () => {

       var tests = [
        {input: [5,3,6,7,9], expect: 4},
        {input: [5,3,6,7,9, 12], expect: 8}
       ]

       tests.forEach(test => {
        expect(avoidObstacles(test.input)).toEqual(test.expect);

       })
    })
})