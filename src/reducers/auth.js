const defaultAuthReducerState = {};

export default(state = defaultAuthReducerState, action) => {
    switch(action.type) {
        case 'LOGIN': 
        return {
            ...action.player
        }
        default: 
        return state
    }
}