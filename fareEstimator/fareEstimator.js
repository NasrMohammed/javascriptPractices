function fareEstimator(ride_time, ride_distance, cost_per_minut, cost_per_mile) {
    const fareCost = [];
    for (let i = 0; i < cost_per_minut.length; i++) {
        fareCost.push(Math.floor(ride_time * cost_per_minut[i] + ride_distance * cost_per_mile[i]));  
    }
    return fareCost;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));