import CollectionPreview from '../collection-preview/collection-preview.component'
import { createStructuredSelector } from 'reselect'
import './collection-overview.styles.scss'
import { connect } from 'react-redux'
import { selectCollections } from '../../redux/shop/shop.selector'

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {
             collections.map(({id, ...otherCollectionProps}) => {
                 return <CollectionPreview key={id} {...otherCollectionProps} />
            })
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})


export default connect(mapStateToProps)(CollectionOverview)

