import cartTypes from './cart.types'

export const toggleHiddenState = () => ({
    type: cartTypes.TOGGLE_HIDDEN_STATE,
})

export const addCartItem = item => ({
    type: cartTypes.ADD_CART_ITEM,
    payload: item
})

export const clearCartItem = item => ({
    payload: item,
    type: cartTypes.CLEAR_CART_ITEM
})

export const removeCartItem = item => ({
    payload: item,
    type: cartTypes.REMOVE_CART_ITEM
})