function crossingSum(matrix, a, b) {
    const columnTotal = matrix[a].reduce((a, b) => a + b);
    let rowTotal = 0;
    console.log(columnTotal)
    for (let i = 0; i < matrix.length; i++) {
        rowTotal += i !== a ? matrix[i][b] : 0;
        console.log(rowTotal)
  
    }
    return columnTotal + rowTotal
}

console.log(crossingSum([[1,1,1,1], 
    [2,2,2,2], 
    [3,3,3,3]], 0, 3))