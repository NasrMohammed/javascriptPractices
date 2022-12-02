function composeRanges(nums) {
    if (nums.length < 1) {
        return [];
    }
    // [-1,0,1,3,4,6,7,8]
    const ranges = [{start: nums[0], end: nums[0]}]
    for (let i = 1; i < nums.length; i++) {
        if(ranges[ranges.length - 1].end + 1 === nums[i]) {
            ranges[ranges.length - 1].end = nums[i];
            console.log(ranges[ranges.length - 1].end + " pushes")
        } else {
            ranges.push({start: nums[i], end: nums[i]});
            console.log(ranges[ranges.length - 1].end + " after pushes\n")

        } 
    }
    for (let i = 0; i < ranges.length; i++) {
        if (ranges[i].start !== ranges[i].end) {
            ranges[i] = `${ranges[i].start}->${ranges[i].end}`;
        } else {
            ranges[i] = ranges[i].start.toString();
        } 
    }
    return ranges;
}

console.log(composeRanges([-1,0,1,3,4,6,7,8]));