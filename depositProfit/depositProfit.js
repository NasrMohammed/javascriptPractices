function depositProfit(deposit, rate, threshold) {
    let year = 0;
    let account = deposit; 

    while(threshold > account) {
        account += account * (rate / 100);
        console.log(account)

        year++;
    }
    return year;
}

console.log(depositProfit(100, 20, 170))