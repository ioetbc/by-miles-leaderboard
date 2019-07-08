import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const createPlayer = functions.auth.user().onCreate((user, context) => {
    const db = admin.firestore();
    return db.collection('players').get().then((snapshot) => {
        const newPlayer = {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            position: snapshot.size + 1,
            gameCount: 0,
            ranking: 0
        };
        return db.collection('players').doc(user.uid).set(newPlayer).catch((error) => console.log(error));
    }).catch((error) => console.log(error));
});