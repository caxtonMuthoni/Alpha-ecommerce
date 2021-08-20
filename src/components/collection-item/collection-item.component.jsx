import './collection-item.style.scss'
const CollectionItem = ({imageUrl, name, price}) => {
    return (
        <div className="collection-item">
            <div className="collection-item__image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="collection-item__footer">
                <span className="collection-item__footer-name">{name}</span>
                <span className="collection-item__footer-price">{price}</span>
            </div>
            <div className="collection-item__btn-add-to-cart">Add to cart</div>
        </div>
    )
}

export default CollectionItem