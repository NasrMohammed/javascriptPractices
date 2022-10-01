
function addTwoNums(...nums) {
    let total = 0;
    nums.forEach((num)  => {
        total += num
    });
    return total;
}
module.exports = addTwoNums;
console.log(addTwoNums(3, 4));