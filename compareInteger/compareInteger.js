function compareInteger(a, b) {
    return parseInt(a) > parseInt(b) ? 'greater' : parseInt(a) < parseInt(b) ? 'less' : 'equal';
}

console.log(compareInteger('12', '13'))
console.log(compareInteger('4232', '434'))
console.log(compareInteger('3232', '3232'))