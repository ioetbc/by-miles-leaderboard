import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { history } from './routers/AppRouter';
import { firebase, subscribe } from './firebase';
import { login, logout } from './actions/auth';
import { startSetPlayers } from './actions/players';
import configureStore from './store/configureStore';
export const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged(user => {
  if(user) {
        store.dispatch(login(user))
        store.dispatch(startSetPlayers())
        store.dispatch(startSetPlayers());
        renderApp()

    if (history.location.pathname === '/') {
        history.push('/')
    }
  } else {
    store.dispatch(logout())
    renderApp();
    history.push('/login')
  }
});