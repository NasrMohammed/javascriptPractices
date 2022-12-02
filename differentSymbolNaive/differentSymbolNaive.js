function differentSymbolNaive(s) {
    const uniqueChars = []
    const inputChars = s.split('')

    inputChars.forEach((char) => {
        if(!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        }
    });
    return uniqueChars.length;
}

function differentSymbolNaive2(s) {
    const uniqueChars = {};
    const inputChars = s.split('')

    inputChars.forEach((char) => {
        uniqueChars[char] = 1;
    });

    return Object.keys(uniqueChars).length;
}

function differentSymbolNaive3(s) {
    const uniqueChars = new Set();
    const inputChars = s.split('')

    inputChars.forEach((char) => {
        uniqueChars.add(char)
    })


    return uniqueChars.size;
}
console.log(differentSymbolNaive3('cabcacabssbbb'))
console.log(differentSymbolNaive2('cabcacabssbbb'))
console.log(differentSymbolNaive('cabcacabssbbb'))
