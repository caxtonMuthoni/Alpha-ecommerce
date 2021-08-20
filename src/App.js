import { Route } from 'react-router-dom'
import './App.css';
import { HomePage } from './pages/homepage.page'

function HatsPage(props) {
  return <h1>Hats page</h1>
}

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={ HomePage } />
      <Route exact path='/hats' component={ HatsPage } />
    </div>
  );
}

export default App;
