function fancyRide(l, fares) {
    const rides = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV']
    for (let i = fares.length -1; i >= 0; i--) {
      // console.log(i)
        if(fares[i] * l <= 20) {
           // console.log(fares[i])
            return rides[i];
        }
        
    }
}
console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));