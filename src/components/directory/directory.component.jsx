import React from 'react'
import './directory.style.scss'
import MenuItem from '../MenuItem/menu-item.component'
import { selectSections } from '../../redux/directory/directory.selector'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
const Directory = ({sections}) => (<div className="directory">
            {sections
                .map(({ id, ...otherProps }) => <MenuItem key={id} {...otherProps} />)}
        </div>
)
    
const mapStateToProps = createStructuredSelector({
    sections: selectSections
})

export default connect(mapStateToProps) (Directory)