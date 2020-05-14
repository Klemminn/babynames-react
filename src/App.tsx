import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import { Header } from 'components'

import { Home, Names, Send, Answer, Results } from 'pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.scss'

const App = () => (
  <>
    <Header />
    <div className='container route-container'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path={['/names/:isMale', '/names/:isMale/:code']} component={Names} />
          <Route exact path='/send/:code' component={Send} />
          <Route exact path='/answer/:code' component={Answer} />
          <Route exact path='/results/:code' component={Results} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  </>
)

export default App
