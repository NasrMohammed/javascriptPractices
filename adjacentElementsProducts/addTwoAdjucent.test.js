//import {addTwoadjacentNums} from './addTwoadjacentNums';
const addTwoadjacentNums = require('./addTwoAdjucentNumbers');
describe(addTwoadjacentNums.name, () => {
    test('Test 1', () => {
        const data = [2, 3, 6, -2, -5, 7, 3,9,9]
        const resposne = addTwoadjacentNums(data)

        expect(resposne).toBe(81);
    });
});
    
