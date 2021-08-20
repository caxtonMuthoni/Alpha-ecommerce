import { withRouter } from 'react-router-dom'
import './menu-item.style.scss'
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="menu-item__background-image" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="menu-item__content">
                <h3 className="menu-item__title">{title.toUpperCase()}</h3>
                <span className="menu-item__subtitle">shop now</span>
            </div>
        </div>
    </div>
}

export default withRouter(MenuItem)