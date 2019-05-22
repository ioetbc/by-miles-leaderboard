const defaultGamesReducerState = [];

export default (state = defaultGamesReducerState, action) => {
    switch(action.type) {
        case 'SET_GAMES': 
        return action.games
        default:
        return state
    }
}