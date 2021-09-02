import cartTypes from './cart.types'

export const toggleHiddenState = () => ({
    type: cartTypes.TOGGLE_HIDDEN_STATE,
})

export const addCartItem = item => ({
    type: cartTypes.ADD_CART_ITEM,
    payload: item
})