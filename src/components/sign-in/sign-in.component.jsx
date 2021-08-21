import React from 'react'
import FormInput from '../FormInput/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.style.scss'

import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {name, value } = event.target
        this.setState({[name]: value})
    }

    onFormSubmit = event => {
        event.preventDefault()

        this.setState({email: '', password: ''})
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className='sign-in__title'>Already has an account</h2>
                <span className="sign-in__subtitle">Sign in with Email and Password</span>
                <form onSubmit={this.onFormSubmit}>
                    <FormInput
                        type="email"
                        label="Email"
                        name = 'email'
                        value={this.state.email}
                        handleChange= {this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name='password'
                        label="Password"
                        handleChange= {this.handleChange}
                        value={this.state.password}
                        required
                    />

                   <div className="sign-in__btns">
                   <CustomButton type='submit' color="black">Sign In</CustomButton>
                   <CustomButton color="blue" onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                   </div>
                </form>
            </div>
        )
    }
}

export default SignIn