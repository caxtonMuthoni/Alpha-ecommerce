import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import { HomePage } from './pages/homepage.page'
import ShopPage from './pages/shop/shop-page.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'

import { auth } from './firebase/firebase.utils'


class App extends React.Component {
   constructor () {
     super ()

     this.state = {
       auth: {
        user: null
       }
     }
   }

   unsubscribeAuthState = null

   componentDidMount () {
     this.unsubscribeAuthState = auth.onAuthStateChanged(user => {
       this.setState({auth:{user: user}})
     })
   }

   componentWillUnmount () {
     this.unsubscribeAuthState()
   }

   render () {
    return (
      <div className="App">
        <Header user={this.state.auth.user} />
        <div className='routes'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignInAndSignUp} />
          </Switch>
        </div>
      </div>
    );
   }
}

export default App;
