function areEqualyStrong(yourLef, yourRight, friendsLeft, firendsRight) {
    const yourWeakest = yourLef <= yourRight ? yourLef : yourRight
    const yourStrongest = yourLef >= yourRight ? yourLef : yourRight 
    const friendsWeakest = friendsLeft <= firendsRight ? friendsLeft : firendsRight
    const friendsStrongest = friendsLeft >= firendsRight ? friendsLeft : firendsRight

    return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest

}

console.log(areEqualyStrong(10, 7, 7, 10))