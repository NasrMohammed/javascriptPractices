function reverseAstring(str) {
    // return str.split('').reverse().join('');
    let reversedWord = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedWord += str[i];
    }
    return reversedWord;

}
console.log(reverseAstring('hello'))
console.log(reverseAstring('Howdy'))