function arrayMaxAdjucentDiff(inputArray) {
    let maxDiff = Math.abs(inputArray[0] - inputArray[1]);

    for (let index = 0; index < inputArray.length; index++) {
        let absoluteDiff = Math.abs(inputArray[index - 1] - inputArray[index]);
        maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff
    }
    return maxDiff
}
module.exports = arrayMaxAdjucentDiff;
console.log(arrayMaxAdjucentDiff([2,9,1,0]));