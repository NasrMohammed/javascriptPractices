function alternatingSum(...total) {
    var evenSum = 0
    var oddSum = 0

    total.forEach((value, index) => {
        if (index % 2 == 0) {
            evenSum += value
        } else {
            oddSum += value
        }
    })
    return [evenSum, oddSum]
}

console.log(alternatingSum(1,2,3,4,5,6, 6))