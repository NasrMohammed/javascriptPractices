function pigLatin(str) {
    const letters = str.split('')
    const vowelRegex = /[aeiou]/;

    if (vowelRegex.test(str[0])) {
        return `${str}way`;
    }

    while(true) {
        if(!vowelRegex.test(letters[0])) {
            const firstConstant = letters.splice(0, 1)[0];
            letters.push(firstConstant)
            //console.log(firstConstant)
        } else {
            break;
        }
    }
    str = letters.join('') + 'ay';
    return str;
}
console.log(pigLatin("glove"));