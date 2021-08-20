import React from 'react'
import './directory.style.scss'
import MenuItem from '../MenuItem/menu-item.component'
class Directory extends React.Component {
    constructor() {
        super()
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://images.pexels.com/photos/1687719/pexels-photo-1687719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://images.pexels.com/photos/6770456/pexels-photo-6770456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://images.pexels.com/photos/5069287/pexels-photo-5069287.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        }
    }

    render() {
        return <div className="directory">
            {this.state.sections
                .map(({ id, ...otherProps }) => <MenuItem key={id} {...otherProps} />)}
        </div>
    }
}

export default Directory