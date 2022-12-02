function palindrome(inputString) {
    const originalLowerCase = inputString.toLowerCase();
    const reversedWord = originalLowerCase.split('').reverse().join('')

    return originalLowerCase === reversedWord;
}

console.log(palindrome('redivider'))