function sumOddFibonacciNumbers(num) {
    let result = 0;
    let previous = 0;
    let current = 1;

    while(current <= num) {
        if(current % 2 !== 0) {
            result += current;
        } 
        const nextCurrent = current + previous;
        previous = current ;
        current = nextCurrent;
    }

    return result;
}
console.log(sumOddFibonacciNumbers(1000));
console.log(sumOddFibonacciNumbers(10));
console.log(sumOddFibonacciNumbers(9999));


