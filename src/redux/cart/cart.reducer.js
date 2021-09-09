import cartTypes from './cart.types'
import { addItemToCart, removeItemFromCart } from './cart.utils'
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartTypes.TOGGLE_HIDDEN_STATE:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartTypes.ADD_CART_ITEM: {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        }
            
        case cartTypes.CLEAR_CART_ITEM: 
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case cartTypes.REMOVE_CART_ITEM: 
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        default:
            return state
    }
}

export default cartReducer