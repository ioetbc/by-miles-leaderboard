const defaultPlayersReducerState = [];

export default (state = defaultPlayersReducerState, action) => {
    switch(action.type) {
        case 'SET_PLAYERS': 
        return action.players
        default:
        return state
    }
}