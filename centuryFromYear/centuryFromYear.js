function centuryFromYear(year) {
    // const century = year / 100; 
    // if (year % 100 === 0 ) {
    //     return century;
    // }
    // return Math.ceil(century);
    return Math.ceil(year / 100); 

}

console.log(centuryFromYear(2003))