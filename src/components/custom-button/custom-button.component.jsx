import './custom-button.style.scss'

const CustomButton = ({children, color,  ...otherButtonProps}) => {
    return (
        <button className={`custom-button custom-button__${color}`} {...otherButtonProps}>
           {children}
        </button>
    )
}

export default CustomButton