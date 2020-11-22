import './App.css';
import { Header } from './components'
import { Clubhouse, SampleCards, TodoApp } from './pages';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const routesList = [
  { name: 'Sample Cards', route: '/sample-cards' },
  { name: 'Clubhouse', route: '/clubhouse' }
];

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Header routesList={routesList} />
        <Switch>
          <Route exact path="/" >
            <Redirect to="/sample-cards" />
          </Route>
          <Route path="/sample-cards">
            <SampleCards />
          </Route>
          <Route path="/clubhouse">
            <Clubhouse />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


export default App;
