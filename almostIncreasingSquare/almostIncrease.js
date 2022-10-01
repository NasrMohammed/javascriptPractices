function   almostIncreasingSequence(sequence) {
    let count = 0;

    for(let i = 0; i< sequence.lengt; i++) {
        if (sequence[i] >= sequence[i+1]) {
            count++;
            if(count > 1) {
                return false
            }
        }
    }
    return true;
}
console.log(almostIncreasingSequence([1,6,1,3,17,8,1]))
console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 3, 2, 4, 5, 7]));
console.log(almostIncreasingSequence([1, 1, 2, 4, 1]));