import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from '../reducers/auth';
import playersReducer from '../reducers/players';
import gamesReducer from '../reducers/games';

import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      players: playersReducer,
      games: gamesReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store;
}