import './App.css';
import { Header } from './components'
import { Clubhouse, Framer, SampleCards } from './pages';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const routesList = [
  { name: 'Sample Cards', path: '/sample-cards', component: SampleCards },
  { name: 'Clubhouse', path: '/clubhouse', component: Clubhouse },
  { name: 'Framer', path: '/framer', component: Framer },
];

function App() {
  return (

    <Router>
      <div className="h-screen flex flex-col">
        <Header routesList={routesList} />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch>
            <Route exact path="/" >
              <Redirect to="/sample-cards" />
            </Route>
            {routesList.map(({ path, component }) => {
              return <Route path={path} component={component} />
            })}
          </Switch>
        </AnimatePresence>
      </div>
    </Router >
  )
}


export default App;
