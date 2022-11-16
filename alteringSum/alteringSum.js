function alternatingSum(...a) {
    let evenSum = 0
    let oddSum = 0
//var result = []
    a.forEach((element, index) => {
        if (index % 2 === 0) {
            evenSum += element
            // console.log("===")
            // result.push(evenSum)
        } else {
            oddSum += element
          //  console.log(oddSum)
           // result.push(oddSum)
        }
    });
    //console.log(result)

    return [evenSum, oddSum]
}

console.log(alternatingSum(2, 3, 4,43, 32))