function chessBoardCellColor(cell1, cell2) {
    const board = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 9,
    }

    const total1 = (board[cell1[0]] + parseInt(cell1[1])) % 2 
    const total2 = (board[cell2[0]] + parseInt(cell2[1])) % 2 

    return total1 === total2

}

console.log(chessBoardCellColor('a1', 'd3'))