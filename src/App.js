import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'


import './App.css';
import { HomePage } from './pages/homepage.page'
import ShopPage from './pages/shop/shop-page.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'

import { auth, createUserProfile } from './firebase/firebase.utils'


class App extends React.Component {
  constructor(props) {
    super()
  }

  unsubscribeAuthState = null

  componentDidMount() {
    const { setCurrentUser } =  this.props
    this.unsubscribeAuthState = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfile(user)

        userRef.onSnapshot(snapshot => {
          const user = {
            id: snapshot.id,
            ...snapshot.data()
          }

          setCurrentUser(user)

        
        })
      } else {
        setCurrentUser(null)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeAuthState()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='routes'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProp = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProp, mapDispatchToProps) (App);
