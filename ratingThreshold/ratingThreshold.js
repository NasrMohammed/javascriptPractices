function ratingThreshold(threshold, ratings) {
    const review = [];

    for (let i = 0; i < ratings.length; i++) {
        let totalRating = 0;
        ratings[i].forEach((rating) => {
            totalRating += rating;
        });
   
        //console.log(sum)
        if (totalRating / ratings[i].length < threshold) {
            review.push[i]
        }
    }

    return review;
}

// function  arraySum (totalRating)  {
//     totalRating.reduce(function(a, b) {
//         return a + b;
//     }, 0);
// } 
console.log(ratingThreshold(3.5, [[3,4],[3,3,3,4],[4]]));