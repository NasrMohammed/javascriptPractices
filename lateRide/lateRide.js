function lateRide(n) {
    const hours = Math.floor(n/60);
    console.log(hours + ' hours')
    const minutes = n % 60;
    console.log(minutes + ' minutes')

    time = hours.toString().concat(minutes.toString()).split('').map((char) => 
        parseInt(char)
    );
    return time.reduce((a, b) => a + b);
}
console.log(lateRide(240))
console.log(lateRide(808))