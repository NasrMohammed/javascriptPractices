function findClosetPair(numbers, sum) {
    let distance = -1;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length -1; j++) {
            // console.log(i + " from i")
            // console.log(j  + " from j")

           const distanceSum = numbers[i] + numbers[j]
           //console.log(distanceSum  + " from distanceSum")

            const absDistance = Math.abs(i - j)  
            if (sum === distanceSum) {
                if (distance === -1 || absDistance < distance) {
                    distance = absDistance;
                }
            }
        }
        
    }
    return distance;
}

console.log(findClosetPair([1,0,2,4,3,0],5));
console.log(findClosetPair([2,3,7,5],8));