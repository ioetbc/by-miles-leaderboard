import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const createPlayer = functions.auth.user().onCreate((user, context) => {
    admin.database().ref('players').once('value').then((snapshot) => {
        const newPlayer = {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            position: snapshot.numChildren() + 1,
            gameCount: 0
        };
        admin.database().ref(`players/${user.uid}`).set(newPlayer).catch((error) => console.log(error));
    }).catch((error) => console.log(error));
});