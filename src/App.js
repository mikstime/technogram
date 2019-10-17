import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Moments from './Moments'
import Search from './Search'
import Home from './Home'
import Events from './Events'
import Auth from './Auth'
import CreateMoment from './CreateMoment'
import './app.sass'

function App() {
  return (
      <Router>
        <Switch>
            <Route path='/moments'>
                <Moments/>
            </Route>
            <Route path='/search'>
                <Search/>
            </Route>
            <Route path='/home'>
                <Home/>
            </Route>
            <Route path='/events'>
                <Events/>
            </Route>
            <Route path='/auth'>
                <Auth/>
            </Route>
            <Route path='/moments/create'>
                <CreateMoment/>
            </Route>
            <Route>
                Hello World
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
