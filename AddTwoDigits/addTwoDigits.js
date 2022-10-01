function addTwoDigits(nums) {
    const total = nums.toString().split('');

    // for (let i = 0; i < nums; i++) {
    //     nums += i;
    // }
    return   parseInt(total[0]) + parseInt(total[1]);
      
 
}
module.exports = addTwoDigits;
console.log(addTwoDigits(35));