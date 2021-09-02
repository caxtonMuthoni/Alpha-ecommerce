import './cart-item.style.scss'

const CartItem = ({ imageUrl, name, price, quantity }) => (
    <div className="cart-item">
        <img src={imageUrl} alt="ItemImage" className="cart-item__img" />
        <div className="cart-item__details">
            <span className="cart-item__name">{name}</span>
            <span className="cart-item__price">{ quantity } * ${ price }</span>
        </div>
    </div>
)

export default CartItem