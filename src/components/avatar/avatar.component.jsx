import './avatar.style.scss'

const Avatar =  ({ image, size = 10 }) => {
    return (
        <div 
         className="avatar"
         style={{
             backgroundImage: `url(${image})`,
             width: size,
             height: size
         }}
        >
            &nbsp;
        </div>
    )
}

export default Avatar