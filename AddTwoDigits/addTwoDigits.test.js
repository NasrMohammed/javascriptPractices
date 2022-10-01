const addTwoDigits = require('./addTwoDigits');


describe(addTwoDigits.name, () => {
    test('Test adding two digits', () => {
        const nums = 65;
        const result = addTwoDigits(nums);

        expect(result).toBe(11);
    });
});