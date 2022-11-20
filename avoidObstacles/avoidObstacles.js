function avoidObstacles(inputArray) {
    inputArray = inputArray.sort((a, b) => a-b);
    const largestArrayVal = inputArray[inputArray.length -1];
    //console.log(largestArrayVal)

    for (let i = 1; i <= largestArrayVal + 1; i++) {
        if(inputArray.every((element) => element % i !== 0)) {
            console.log(i)
            return i;
        }
    }
}

module.exports = avoidObstacles;
console.log(avoidObstacles([5,3,6,7,9, 12]))

function avoid(inputArray) {
    for(let i =1; ; i++) {
        if(inputArray.every(element => element % i ))
        return i
    }
}
console.log(avoid([5,3,6,7,9]))
