function largestNumber(n) {
    // const word = '9'.repeat(n);
    // if (n === 0 ) return;
    // return parseInt(word);

   
    // console.log(parseInt(1 + '0'.repeat(n)) + ' debug 1')
    return parseInt(1 + '0'.repeat(n)) - 1;

}

console.log(largestNumber(0));
console.log(largestNumber(1));
console.log(largestNumber(2));
console.log(largestNumber(3));
console.log(largestNumber(4));
console.log(largestNumber(10));