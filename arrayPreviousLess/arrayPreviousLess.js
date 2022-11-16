function arrayPreviousLess(items) {
    let lessThanList = []
    for (let i = items.length - 1; i >= 0; i-- ) {
        for (let j = i; j >= 0; j--) {
            if (items[i] > items[j]) {
                lessThanList.unshift(items[j]);
                break;
            } else if (j === 0) {
                lessThanList.unshift(-1);
            }
            
        }  
    }
    return lessThanList; 
}
module.exports = arrayPreviousLess
console.log(arrayPreviousLess([3,4,5,4,5]))