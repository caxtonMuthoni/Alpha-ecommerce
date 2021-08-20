import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.style.scss'
const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h2 className="collection-preview__title">{title.toUpperCase()}</h2>
            <div className="collection-preview__items">
                {
                    items.filter((_, index) => index < 4).map(({ id, ...otherItemProps }) => {
                        return (
                            <CollectionItem key={id + 'test'} {...otherItemProps} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CollectionPreview