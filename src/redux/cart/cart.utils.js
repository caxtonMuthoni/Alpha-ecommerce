export const addItemToCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id)
    
    if (existingItem) {
        return cartItems.map(cartItem => {
            if (cartItem.id === itemToAdd.id) {
                return {...cartItem, quantity: cartItem.quantity + 1}
            }

            return cartItem
        })
    }

    return [
        ...cartItems,
        {...itemToAdd, quantity: 1}
    ]
}

export const removeItemFromCart = (cartItems, removeCartItem) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === removeCartItem.id)

    if (existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== removeCartItem.id)
    }

    return cartItems.map(cartItem => (
        cartItem.id === removeCartItem.id ? { ...cartItem, quantity: cartItem.quantity - 1 } :
            cartItem
    ))
}