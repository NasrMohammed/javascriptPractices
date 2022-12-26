function switchLights(a) {
    let originalLights = [...a];

    for (let i = 0; i < originalLights.length; i++) {
        if (a[i] === 1) {
            originalLights = swapLights(originalLights, i);
        }
    }
    return originalLights;
}

function swapLights(lights, currentIndex) {
    for (let i = 0; i < currentIndex + 1; i++) {
       lights[i] = lights[i] === 1 ? 0 : 1;    
    }
    return lights;
}
console.log(switchLights([1,1,1,1,1]))
console.log(switchLights([0,0]))
console.log(switchLights([1,0,1,0,1]))