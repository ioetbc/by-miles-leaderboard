import db from '../firebase';

const setGames = (games) => ({
    type: 'SET_GAMES',
    games
})

export const startSetGames = () => (dispatch) => {
    return db.collection('games').onSnapshot(querySnapshot => {
        const games = []
        querySnapshot.forEach(childSnapshot => {
            games.push({
                uid: childSnapshot.id,
                ...childSnapshot.data()
            })
        })
        dispatch(setGames(games))
    })
}