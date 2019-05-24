function updateRankings({ winner, loser, losersScore }) {
    const winnerPrevRanking = winner.ranking || 0;
    const loserPrevRanking = loser.ranking || 0;

    const expectedScoreDiff = Math.min(21, Math.abs(winnerPrevRanking - loserPrevRanking));
    const actualScoreDiff = 21 - Math.min(losersScore, 19);
    const totalRankingChange = actualScoreDiff - expectedScoreDiff;

    let totalGames = winner.gameCount + loser.gameCount;
    if (!totalGames) {
        console.log('eh')
        totalGames = 2;
        winner.gameCount = 1;
        loser.gameCount = 1;
    }

    const winnersRanking = winnerPrevRanking + Math.round(totalRankingChange * (loser.gameCount / totalGames));
    const losersRanking = loserPrevRanking - Math.round(totalRankingChange * (winner.gameCount / totalGames));

    return { winnersRanking, losersRanking };
}

export default updateRankings;
