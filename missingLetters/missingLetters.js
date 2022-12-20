function missingLetters(str) {
    const alphabet = 'abcdefghijklmonpqrstuvwxzy'.split('');
    const  chars = str.split('');
    
    if (chars[0] !== 'a') {
        return undefined;
    }

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== alphabet[i]) {
            return alphabet[i];
        } 
    }
    return undefined;
}
console.log(missingLetters("abce"))