import { connect } from 'react-redux'
import { toggleHiddenState } from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import './carticon.style.scss'
const CartIcon = () => (
    <div className="cart-icon">
        <ShoppingBag className="cart-icon__icon" />
        <span className="cart-icon__count">0</span>
    </div>
)

const mapDispatchToState = dispatch => ({
    toggleHiddenState: () => dispatch(toggleHiddenState())
})

export default connect(null, mapDispatchToState)(CartIcon)