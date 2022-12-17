function incorrectPassCodeAttempts(passcode, attempts) {
    let failedAttempts = 0;

    for (let attempt of attempts) {
        failedAttempts = attempt === passcode ? 0 : failedAttempts++;
       console.log(attempt + " from attempt")
        if (failedAttempts === 10) {
            return true;
        }
    }
    return false;
}
console.log(incorrectPassCodeAttempts("1119", ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7258", "9845"]))