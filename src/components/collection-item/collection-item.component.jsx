import { connect } from 'react-redux'
import { addCartItem } from '../../redux/cart/cart.actions'
import './collection-item.style.scss'

const CollectionItem = ({ item, addCartItem }) => {
    const {imageUrl, name, price} = item
    return (
        <div className="collection-item">
            <div className="collection-item__image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="collection-item__footer">
                <span className="collection-item__footer-name">{name}</span>
                <span className="collection-item__footer-price">{price}</span>
            </div>
            <div onClick={ () => addCartItem(item) } className="collection-item__btn-add-to-cart">Add to cart</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)