
import database from '../firebase/firebase';

export const startSetPlayers = () => {
    return(dispatch, getState) => {
        const { auth } = getState();
        return database.ref('players').on('value', function(snapshot) {
            const players = []
            snapshot.forEach(childSnapshot => {
                players.push({
                    uid: childSnapshot.key,
                    ...childSnapshot.val()
                })
            });
            dispatch(setPlayers(players.sort((l, h) => l.position - h.position)));
        })
    }
}

export const setPlayers = (players) => ({
    type: 'SET_PLAYERS',
    players
});

export const won = (opponentId) => {
    return(dispatch, getState) => {
        const { auth, players } = getState();
        const me = players.find(player => player.uid === auth.uid);
        const opponent = players.find(player => player.uid === opponentId);

        const updates = {
            [`/players/${me.uid}`]: {
                position: opponent.position,
                gameCount: me.gameCount ++
            },
            [`/players/${opponentId}/position`]: {
                position: me.position,
                gameCount: opponent.gameCount ++
            }
        };

        return database.ref().update(updates);
    }
}