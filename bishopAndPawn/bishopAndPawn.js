function bishopAndPawn(bishop, pawn) {
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
    const bishopX = board[bishop[0]];
    const bishopY = parseInt(bishop[1]);
    const pawnX = board[pawn[0]];
    const pawnY = parseInt(pawn[1]);

    console.log(bishopX + " bishopX\n")
    console.log(bishopY + " bishopY\n")
    console.log(pawnX + " pawnX\n")
    console.log(pawnY + " pawnY")

    if (bishopX + bishopY === pawnX + pawnY || bishopX + pawnY === pawnX + bishopY) {
        return true
    }
    return false;
}

console.log(bishopAndPawn('a1', 'e4'));