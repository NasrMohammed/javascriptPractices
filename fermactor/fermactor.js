function fermactor(n) {
    for (let i = 1; i < n ; i++) {
        for (let j = 1; j < i; j++) {
            const total = Math.pow(i, 2) - Math.pow(j, 2)
            // console.log(Math.pow(i, 2) + " i")
            // console.log(Math.pow(j, 2) + " j")
            if (total === n) {
                return [i, j];
            }  
        } 
    }
}
console.log(fermactor(15))