function digitDegree(n) {
    let count = 0;
    let currentNumber = n;
    if (n <= 9) {
        return count;
    } else {
        while(true) {
            count++;
            currentNumber = getDigit(currentNumber)
            console.log("the digit number is :" + currentNumber)
            if (currentNumber <= 9 ) {
                break;
            }
        }
    }

    return count;
}

function getDigit(num) {
    const nums = num.toString().split('').map((element) => parseInt(element))
    return nums.reduce((a, b) => {
        return a + b;
    });
}

console.log(digitDegree(200))
// console.log(digitDegree(10))
// console.log(digitDegree(91))