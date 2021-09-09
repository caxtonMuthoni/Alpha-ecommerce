import { connect } from "react-redux"
import CollectionItem from "../../components/collection-item/collection-item.component"
import { selectCollection } from "../../redux/shop/shop.selector"

import './collection.styles.scss'

const CollectionPage = ({ collection, match }) => {
    const {items, title} = collection;
    return (
        <div className="collection-page">
            <h4 className="title">{ title }</h4>
            <div className="items">
            {
           items.map(item => (<CollectionItem item={item} key={item.id} />))
        }
        </div>
    </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps) (CollectionPage)