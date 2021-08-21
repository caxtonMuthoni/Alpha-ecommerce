import './form-input.style.scss'

const FormInput = ({ label, handleChange, ...otherInputProps }) => {
    return (
        <div className="form-input__group">
            <input onChange={handleChange} {...otherInputProps} />
            {
                label ?
                    (<label className={`${otherInputProps.value.length ? 'form-input__label--shrink' : null} form-input__label`}>{label}</label>) : null
            }
        </div>
    )
}

export default FormInput