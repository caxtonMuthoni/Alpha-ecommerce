import './loader.style.scss'

const Loader = ({ radius }) => {
    return (
        <div
            style={{
                width: radius,
                height: radius
            }}
            className="loader"></div>
    )
}

export default Loader