function growingPlant(desiredHeight, upSpeed, downSpeed) {
    let daysToGrow = 0;
    let currentHeight = 0
    while(currentHeight < desiredHeight) {
        daysToGrow++;
        currentHeight += upSpeed;

        if(currentHeight < desiredHeight) {
            currentHeight -= downSpeed;
        }
    }
    return daysToGrow;
}

console.log(growingPlant(910, 100, 10))