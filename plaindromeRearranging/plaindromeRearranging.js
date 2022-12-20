function plaindromeRearranging(inputString) {
    const chars = inputString.split('');
    const charCount = {};
    let oddCount = 0;

    for (const char of chars) {
        console.log(char + ' from char')
        if(charCount.hasOwnProperty(char)) {
            charCount[char]++; 
        } else {
            charCount[char] = 1;
        }
    }

    for (const key in charCount) {
        console.log(key  + ' from key')
        if (charCount[key] % 2 !== 0) {
            oddCount++;   
        }
    }
    return oddCount > 1 ? false : true;
}
console.log(plaindromeRearranging('aabb'))