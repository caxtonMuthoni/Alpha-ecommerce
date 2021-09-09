import { createSelector } from "reselect";

const cartSelector = state => state.cart

export const selectCartItems = createSelector(
    [cartSelector],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => (accumulatedQuantity + cartItem.quantity), 0)
)

export const selectHiddenToggle = createSelector(
    [cartSelector],
    cart => cart.hidden
)

export const selectTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedPrice, cartItem) => {
         return accumulatedPrice + (cartItem.quantity * cartItem.price)
    },0)
)