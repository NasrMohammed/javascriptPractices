function houseOfCats(legs) {
    let numOfPeople = [];
    if (legs === 2 ) {
        return [1];
    }
    while(legs >= 0 ) {
        numOfPeople.unshift(legs/2);
        legs -= 4;

    }
    return numOfPeople;
}

console.log(houseOfCats(6))