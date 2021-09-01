import React from 'react'

import FormInput from '../FormInput/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfile } from '../../firebase/firebase.utils'
import './sign-up.style.scss'


class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    submitForm = async event => {
        event.preventDefault()
        const { displayName, email, confirmPassword, password } = this.state
        if (password !== confirmPassword) {
            alert('Password mismatch')
            return
        }

        const {user} = await auth.createUserWithEmailAndPassword(email, password)
        if (user) {
            const authUserDetails = {
                displayName,
                photoURL: `https://ui-avatars.com/api/?name=${displayName}&background=random`
            }
            await createUserProfile(user, authUserDetails)

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
    }

    render() {
        const { displayName, email, confirmPassword, password } = this.state
        return (
            <div className="sign-up">
                <h2 className="sign-up__title">Don't have an account ?</h2>
                <span className="sign-up__subtitle">Sign up with email and password</span>
                <form onSubmit={this.submitForm}>
                    <FormInput
                        type="text"
                        label="Display name"
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleChange}
                    />

                    <FormInput
                        type="email"
                        label="Email"
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                    />

                    <FormInput
                        type="password"
                        label="Password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                    />

                    <FormInput
                        type="password"
                        label="Confirm Password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                    />

                    <CustomButton type="submit" color='black' >Sign up</CustomButton>
                </form>
            </div>
        )
    }
}


export default SignUp