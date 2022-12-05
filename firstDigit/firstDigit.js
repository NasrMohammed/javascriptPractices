function firstDigit(inputString) {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const chars = inputString.split('');

    for (let i = 0; i < chars.length; i++) {
        if (digits.includes(chars[i])) {
            return chars[i];
        }
    }
}

console.log(firstDigit('var_1_Int'))
console.log(firstDigit('q2q-o'))