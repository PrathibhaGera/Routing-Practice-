import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'

import NotFound from './components/NotFound'

const App = () => (
  <div>
    <div className="bg-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
