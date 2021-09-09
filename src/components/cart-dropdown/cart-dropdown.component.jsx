import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.style.scss'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleHiddenState } from '../../redux/cart/cart.actions'
const CartDropDown = ({ cartItems, history, match, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-dropdown__items">
            {
                cartItems.length ?
                    cartItems.map(cartItem => (<CartItem {...cartItem} key={cartItem.id} />)) :
                    <span className="cart-dropdown__empty-cart">
                        Cart is empty
                    </span>
            }
        </div>
        <CustomButton color='black' onClick={() => { history.push(`${match.url}checkout`); dispatch(toggleHiddenState()) } }>Go to check out</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps) (CartDropDown))