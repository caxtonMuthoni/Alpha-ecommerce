import './avatar.style.scss'

const Avatar = ({ image, size = 10 }) => {
    return (
        <img
            src={image}
            className="avatar"
            style={{
                width: size,
                height: size
            }}
            alt=''
        />
    )
}

export default Avatar