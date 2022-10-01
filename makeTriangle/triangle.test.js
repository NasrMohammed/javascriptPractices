const buildTriangle = require('./triangle');


xdescribe(buildTriangle.name, () => {
    test("test a triangle of 9 stars", () => {
        expect(buildTriangle(9)).toBe(`*
                                       **
                                       ***
                                       ****
                                       *****
                                       ******
                                       *******
                                       ********
                                       *********`);
    });
});