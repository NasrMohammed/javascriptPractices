function confirmEnding(str, target) {
    const start = str.length - target.length;

    return str.substr(start) === target;
}
console.log(confirmEnding("Open sesame", "pen"))
console.log(confirmEnding("Abstraction", "action"))