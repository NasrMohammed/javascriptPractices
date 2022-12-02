function convertString(s, t) {
    let word = ''
    let tIndex = 0
   // const sChar = s.split('');

    for (let i = 0; i < s.length; i++) {
        if(s[i] === t[tIndex]) {
            word = word.concat(s[i]);
            tIndex++;

            if (word === t) {
                return true;
            }
        }   
    }
    return false;
}

function convertString2(s, t) {
    let tPointer = 0;

    for (let i = 0; i < s.length; i++) {
        if(s[i] === t[tPointer]) {
            tPointer++;
            if (tPointer === t.length) {
                return true;
            }
        } 
    }
    return false;
}

console.log(convertString2('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString2('ceoydfethfsiyg5h5ytsing', 'codefightsing'))
console.log(convertString2('addbyca', 'abcd'));
console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('ceoydfethfsiyg5h5ytsing', 'codefightsing'))
console.log(convertString('addbyca', 'abcd'));
