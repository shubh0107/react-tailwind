import './App.css';
import { Header } from './components'
import { Clubhouse, SampleCards, TodoApp } from './pages';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const routesList = [
  { name: 'Sample Cards', route: '/sample-cards' },
  { name: 'Clubhouse', route: '/Clubhouse' }
];

function App() {
  return (
    <Router>
      <Header routesList={routesList} />
      <Switch>
        <Route exact path="/" >
          <Redirect to="/sample-cards" />
        </Route>
        <Route path="/sample-cards">
          <SampleCards />
        </Route>
        <Route path="/Clubhouse">
          <Clubhouse />
        </Route>
      </Switch>
    </Router>
  )
}


export default App;
