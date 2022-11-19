function arrayReplace(inputArray, elementToReplace, subElement) {
    inputArray.forEach((element, index) => {
       if (element === elementToReplace) {
        inputArray[index] = subElement;
       } 
    });
    return inputArray;
}

module.exports = arrayReplace;
console.log(arrayReplace([1, 2, 1], 1, 3))