function lonestWord(wordsArray) {
    let lonestLength = 0;
    let longestWords = [];

    wordsArray.forEach((word) => {
        lonestLength = lonestLength < word.length? word.length : lonestLength;
    });

    wordsArray.forEach((word) => {
        if (word.length === lonestLength) {
            longestWords.push(word)
        }
    });
    return longestWords;
}

console.log(lonestWord(["ad", "cd", "abc", "ways"]));