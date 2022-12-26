function uniqueDigitProducts(a) {
    const products = [];

    a.forEach((num) => {
        const product = getProduct(num)
        if (!products.includes(product)) {
            products.push(product)
        }
    });
    return products.length;
}

function getProduct(num) {
    const digits = num.toString().split('');
    let product = 1;

    digits.forEach((digit) => {
        product *= parseInt(digit);
    });
    return product;
}

console.log(uniqueDigitProducts([2,8,121,42,222,23]))