import './header.style.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/alpha.svg'

const Header = () => {
    return (
        <div className="header">
            <Link to='/' className='header__logo-container'>
                <Logo className='header__logo' /> Alpha
            </Link>
            <div className="header__options">
                <Link to='/shop' className="header__options--option">Shop</Link>
                <Link to='/contact' className="header__options--option">Contact</Link>
            </div>
        </div>
    )
}

export default Header