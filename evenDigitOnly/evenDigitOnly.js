function evenDigitOnly(n) {
        const digits = n.toString().split('');

        return digits.every((digit) => parseInt(digit) % 2 === 0);
}
console.log(evenDigitOnly(6))
console.log(evenDigitOnly(43434343))