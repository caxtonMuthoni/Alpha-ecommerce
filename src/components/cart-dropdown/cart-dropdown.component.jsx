import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.style.scss'
const CartDropDown = () => (
    <div className="cart-dropdown">
        <div className="cart-dropdown__items"></div>
        <CustomButton color='black'>Go to check out</CustomButton>
    </div>
)

export default CartDropDown