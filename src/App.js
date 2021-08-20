import { Route, Switch } from 'react-router-dom'
import './App.css';
import { HomePage } from './pages/homepage.page'
import ShopPage from './pages/shop/shop-page.component'
import Header from './components/header/header.component'


function App() {
  return (
    <div className="App">
      <Header />
      <div className='routes'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
