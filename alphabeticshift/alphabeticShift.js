function alphabeticShift(str) {
    let result = ''
    str.split('').forEach(char => {
        if (char === 'z') {
            result += 'a'
        }
        result += String.fromCharCode(char.charCodeAt() + 1)
    })
    return result.replace(/\W/, '');  
}
console.log(alphabeticShift('crazy'))