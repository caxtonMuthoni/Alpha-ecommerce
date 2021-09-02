import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.style.scss'
import { connect } from 'react-redux'
const CartDropDown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-dropdown__items">
            {
                cartItems.map(cartItem => (<CartItem {...cartItem} />))
            }
        </div>
        <CustomButton color='black'>Go to check out</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps) (CartDropDown)