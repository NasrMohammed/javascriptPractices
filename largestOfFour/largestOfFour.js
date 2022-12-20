function largestOfFour(number) {
    const highestNumber = []
    for (let numberGroub of number) {
        let largest = 0;
        for (let num of numberGroub) {
            largest = largest < num ? num : largest;
        }
        highestNumber.push(largest)
    }
    return highestNumber;
}

console.log(largestOfFour([[4,5,1,3], [13,27,18,26], [1000,1001,857,1], [32,35,37,39]]))