
function arrayConversion(inputArray) {
    var tmp = []
    var j = 0
    while (inputArray.length > 1) {
        tmp = []
        for (let i = 0; i < inputArray.length; i += 2) {
            tmp.push(inputArray.slice(i, i + 2)) 
        }
        inputArray = tmp.map(pair => (j ? pair[0] * pair[1] : pair[0] + pair[1]))
        j = (j + 1) % 2
    }

    return inputArray[0]
}

console.log(arrayConversion([1,2,3,4,5,6,7,8]))









// function arrayConversion(...inputArray) {
//     let isOdd = true

//     while(inputArray.lenth !== 1  ) {
//         inputArray = sumProduct(inputArray, isOdd)
//         isOdd = !isOdd
//     }

//     return inputArray[0]
// }

// function sumProduct(nums, isOdd) {
//     const sumProduct = nums = []
//     if(isOdd) {
//         for (let i = 0; i < nums.length; i += 2) {
//             sumProduct.push(nums[i] + nums[i+1]) 
//         }
//     } else {
//         for (let i = 0; i < nums.length; i += 2) {
//             sumProduct.push(nums[i] * nums[i + 1]) 
//         }
//     }
//     return sumProduct
// }

