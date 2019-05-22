function updateRankings({ winner, loser, losersScore }) {
    const winnerPrevRanking = winner.ranking || 0;
    const loserPrevRanking = loser.ranking || 0;

    const expectedScoreDiff = Math.min(21, winnerPrevRanking - loserPrevRanking);
    const actualScoreDiff = 21 - Math.min(losersScore, 19);
    const totalRankingChange = actualScoreDiff - expectedScoreDiff;

    let totalGames = winner.gamesCount + loser.gamesCount;
    if (!totalGames) {
        totalGames = 2;
        winner.gamesCount = 1;
        loser.gamesCount = 1;
    }

    const winnersRanking = winnerPrevRanking + Math.round(totalRankingChange * (loser.gamesCount / totalGames));
    const losersRanking = loserPrevRanking - Math.round(totalRankingChange * (winner.gamesCount / totalGames));

    return { winnersRanking, losersRanking };
}

export default updateRankings;
