const addTwoNums = require("./addTwoNums");


describe(addTwoNums.name, () => {
    test("Test adding two numbers 4 + 7 = 11", () => {
        expect(addTwoNums(4, 7)).toBe(11);
    });
    test("Test adding two numbers 14 + 19 = 33", () => {
        expect(addTwoNums(14, 19)).toBe(33);
    });
    test("Test adding two numbers -5 + 7 = 2", () => {
        expect(addTwoNums(-5, 7)).toBe(2);
    });
});

