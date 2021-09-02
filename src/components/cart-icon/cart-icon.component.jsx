import { connect } from 'react-redux'
import { toggleHiddenState } from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import './carticon.style.scss'
const CartIcon = ({total, toggleHiddenState}) => (
    <div className="cart-icon" onClick={() => toggleHiddenState()}>
        <ShoppingBag className="cart-icon__icon" />
        <span className="cart-icon__count">{ total }</span>
    </div>
)

const mapDispatchToState = dispatch => ({
    toggleHiddenState: () => dispatch(toggleHiddenState())
})

const mapStateToProps = ({ cart: { cartItems } }) => ({
    total: cartItems.length
})

export default connect(mapStateToProps, mapDispatchToState)(CartIcon)