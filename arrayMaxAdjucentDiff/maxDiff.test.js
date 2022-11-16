const arrayMaxAdjucentDiff = require('./arrayMaxAdjucentDiff');


describe(arrayMaxAdjucentDiff.name, () => {
    test('Test adding two digits', () => {

        var testCases = [
            {input: [2,9,1,0], expect: 8},
            {input: [2,8,3,0], expect: 6},
            {input: [2,7,4,0], expect: 5},
        ];
    
        testCases.forEach(function (testCase) {
                expect(arrayMaxAdjucentDiff(testCase.input)).toEqual(testCase.expect);
        });
    });
});