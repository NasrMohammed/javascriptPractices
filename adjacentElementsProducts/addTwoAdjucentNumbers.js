function addTwoadjacentNums(length) {
    let maxSum = length[0] * length[1];

  for (let i =1; i < length.length-1; i ++) {
      let newSum = length[i] * length[i+1];
      maxSum = maxSum < newSum ? newSum : maxSum;
  }
  return maxSum
}

module.exports = addTwoadjacentNums;
console.log(addTwoadjacentNums(1,4,5,6,7,8,4,9,9));