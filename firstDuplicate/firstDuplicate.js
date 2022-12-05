function firstDuplicate(nums) {
    const firstDup = {};

    for(let num of nums) {
        if (firstDup.hasOwnProperty(num)) {
          //  console.log(firstDup)
            return num;
        } 
        firstDup[num] = num;
    }

    return -1;
}

console.log(firstDuplicate([2,3,5,4,1,3]))