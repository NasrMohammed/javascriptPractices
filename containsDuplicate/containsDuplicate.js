function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j ) {
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
            
        }
        
    }
    return false;
}

function containsDuplicate2(a) {
    a = a.sort((a, b) => a-b);

    for (let i = 0; i < a.length; i++) {
        if (a[i] === a[i+1]) {
            return true;
        }
    }
    return false;
}
console.log(containsDuplicate2([1, 2, 5, 3, 4, 8, 9, 7]))
console.log(containsDuplicate2([1, 2, 5, 3, 4, 2, 9, 7]))
console.log(containsDuplicate([1, 2, 5, 3, 4, 8, 9, 7]))
console.log(containsDuplicate([1, 2, 5, 3, 4, 2, 9, 7]))