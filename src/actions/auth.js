export const login = (player) => ({
    type: 'LOGIN',
    player
});

export const logout = () => ({
    type: 'LOGOUT',
});