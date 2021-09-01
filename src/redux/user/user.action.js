import userTypes from './user.types'
export const setCurrentUser = user => {
    console.log(userTypes);
    return {
        type: userTypes.SET_CURRENT_USER,
        payload: user
    }
}