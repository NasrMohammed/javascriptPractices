function characterParity(symbol) {
    const result = parseInt(symbol)
    return isNaN(result) ? 'not a digit' : result % 2 == 0 ? 'even' : 'odd';
   
}
console.log(characterParity('nasr'))
console.log(characterParity('24'))
console.log(characterParity('2235'))