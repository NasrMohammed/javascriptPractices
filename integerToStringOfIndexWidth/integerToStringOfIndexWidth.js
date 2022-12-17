function integerToStringOfIndexWidth(number, width) {
    let stringifiedNum = number.toString();
    const numberWidt = stringifiedNum.length;
    const widthDiff = width - numberWidt;
    console.log(numberWidt)
    if (numberWidt < width) {
        let padStart = '';

        for (let i = 0; i < widthDiff; i++) {
           padStart = padStart.concat('0');          
        }

        return padStart.concat(stringifiedNum);
    }

    if (numberWidt < width) {
        return stringifiedNum.substring(widthDiff, stringifiedNum.length);
    }

    return stringifiedNum;
}

console.log(integerToStringOfIndexWidth(12344, 2));
console.log(integerToStringOfIndexWidth(123, 4));
console.log(integerToStringOfIndexWidth(123544, 5));
console.log(integerToStringOfIndexWidth(1236666499998, 9));