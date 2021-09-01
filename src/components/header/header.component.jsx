import './header.style.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/alpha.svg'
import Avatar from '../avatar/avatar.component'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

import { auth } from '../../firebase/firebase.utils'

const Header = ({ user, hidden, setHidden }) => {
    return (
        <div className="header" >
            <Link to='/' className='header__logo-container'>
                <Logo className='header__logo' /> Alpha
            </Link>
            <div className="header__options">
                <Link to='/shop' className="header__options--option">Shop</Link>
                <Link to='/contact' className="header__options--option">Contact</Link>
                {
                    user ?
                        (
                            <div className="header__options--login">
                                <span className="header__options--option">{user.displayName}</span>
                                <span onClick={() => auth.signOut()} className="header__options--option mr-2">Sign Out</span>
                                <Avatar image={user.photoURL} size={40} />
                            </div>
                        ) :
                        (<Link to='/signin' className="header__options--option">Sign In</Link>)
                }
            </div>
            <CartIcon />
           
            {
              hidden ? null : (<CartDropDown />)
            }
        </div>
    )
}

const mapStateToProps = ({user, cart}) => ({
    user: user.currentUser,
    hidden: cart.hidden
})

export default connect(mapStateToProps) (Header)