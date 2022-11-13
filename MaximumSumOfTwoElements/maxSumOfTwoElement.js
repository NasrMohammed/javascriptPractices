var maxProduct = function (nums) {
    nums.sort((a,b)=> a-b);

    let sum1 = (nums[0]-1)*(nums[1]-1);
    let sum2 = (nums[nums.length-1])*(nums[nums.length-2]);

    if(sum1 > sum2) {
        return sum1;
    } else {
        return sum2
    }
};

module.exports = maxProduct;
console.log(maxProduct([1, 5, -6, 4, 5, -6]));