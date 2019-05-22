import db, { firebase } from '../firebase';

export const startSetPlayers = () => {
    return(dispatch, getState) => {
        return db.collection('players').onSnapshot(querySnapshot => {
            const players = []
            querySnapshot.forEach(childSnapshot => {
                players.push({
                    uid: childSnapshot.id,
                    ...childSnapshot.data()
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
        const batch = db.batch();
        batch.update(db.collection('players').doc(me.uid), {
            position: opponent.position,
            gameCount: me.gameCount ++,
            lastPlayed: firebase.firestore.Timestamp.fromDate(new Date())
        });
        batch.update(db.collection('players').doc(opponentId),{
            position: me.position,
            gameCount: opponent.gameCount ++,
            lastPlayed: firebase.firestore.Timestamp.fromDate(new Date())
        });
        return batch.commit().then(() => {
            db.collection('games').add({
                winner: {
                    uid: me.uid,
                    name: me.name
                },
                loser: {
                    uid: opponent.uid,
                    name: opponent.name
                },
                playedAt: firebase.firestore.Timestamp.fromDate(new Date())
            });
        })
    }
}