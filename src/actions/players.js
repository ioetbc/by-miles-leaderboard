
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
            if (!players.find(player => player.uid = auth.uid)) dispatch(createPlayer());
            dispatch(setPlayers(players.sort((l, h) => l.position - h.position)));
        })
    }
}

export const createPlayer = () => {
    return(dispatch, getState) => {
        const { auth, players } = getState();
        return database.ref(`players/${auth.uid}`).set({ ...auth, position: players.length });
    }
}

export const setPlayers = (players) => ({
    type: 'SET_PLAYERS',
    players
})

export const won = (oponentId) => {
    return(dispatch, getState) => {
        const { auth, players } = getState();
        const myPosition = players.filter(player => player.uid === auth.uid).position;
        const oponentPosition = players.filter(player => player.uid === oponentId).position;

        const updates = {};
        updates[`/players/${auth.uid}/position`] = oponentPosition;
        updates[`/players/${oponentId}/position`] = myPosition;

        return database.ref().update(updates);
    }
}

