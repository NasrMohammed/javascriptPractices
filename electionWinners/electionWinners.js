function electionWinners(votes, k) {
    let inTheRunning = 0;
    const mostVotes = Math.max(...votes);
   // console.log(mostVotes)
    const sortedVotes = votes.sort((a, b) => b - a);
    //console.log(sortedVotes)

    if (sortedVotes[0] !== sortedVotes[1] && k === 0) {
        return 1;
    }

    votes.forEach((voteCount) => {
       // console.log(voteCount)
        if(mostVotes - voteCount < k) {
            inTheRunning++;
        }
    });

    return inTheRunning;
}

console.log(electionWinners([2,3,5,7], 3))