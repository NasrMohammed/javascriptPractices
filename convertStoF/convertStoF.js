function convertCtoF(c) {
    return c * 9/5 + 32;
}


function convertFtoC(f) {
    return (f - 32) * 5/9;
}

console.log(convertCtoF(-30))
console.log(convertCtoF(32))
console.log(convertCtoF(95))
console.log(convertFtoC(-30))
console.log(convertFtoC(32))
console.log(convertFtoC(95))