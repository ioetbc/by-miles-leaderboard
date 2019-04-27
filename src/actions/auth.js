export const login = (player) => ({
    type: 'LOGIN',
    player: {
        uid: player.uid,
        name: player.displayName,
        email: player.email,
        photoURL: player.photoURL,
    }
});

export const logout = () => ({
    type: 'LOGOUT',
});