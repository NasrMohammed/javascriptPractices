function sumOfTwo(a, b, v) {
    const hashMap = {}

    for (const num of a) {
        const difference = v - num;
        hashMap[difference] = difference
    }
    for (const num of b) {
        if (hashMap.hasOwnProperty(num)) {
            return true
        }
    }
    return false
}
console.log(sumOfTwo([1,2,3], [10,20,30,40], 99))
console.log(sumOfTwo([1,2,3], [10,20,30,40], 42))