

const maxProduct = require('./maxSumOfTwoElement');


describe(maxProduct.name, () => {
    test('Test adding two digits', () => {
        const nums = [1,2,4,6,7,8,9,4,5,3];
        const result = maxProduct(nums);

        expect(result).toBe(72);

        var testCases = [
            {input: [1,2,4,6,7,8,9,4,5,3], expect: 72},
            {input: [1,2,4,6,7,9,9,4,5,3], expect: 81},
            {input: [1,2,4,6,7,8,8,4,5,3], expect: 64},
        ];
    
        testCases.forEach(function (testCase) {
                expect(maxProduct(testCase.input)).toEqual(testCase.expect);
        });
    });
});