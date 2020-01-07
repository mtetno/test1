export const getUser = (state, login) => state.entities.users[login]
export const getRepo = (state, fullName) => state.entities.user[fullName]
