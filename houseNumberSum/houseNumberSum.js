function houseNumberSum(houses) {
    //     totalHouses = [];
    //     for (let i = 0; i < houses.length; i++) {
    //         if (houses[i] !== 0) {
    //             totalHouses.push(houses[i])
    //         } else if (houses[i] === 0) {
    //             break;
    //         } 
    //     }
    //     let total = 0

    //    for (let i = 0; i < totalHouses.length; i++) {
    //      total += totalHouses[i]
    //    }

    //    return total;
    let total = 0;
    for (let i = 0; i < houses.length; i++) {
        if (houses[i] === 0) {
            return total;
        }
        total += houses[i]
    }

    
}
console.log(houseNumberSum([5, 1, 2, 3, 0, 1, 5, 0, 2]))