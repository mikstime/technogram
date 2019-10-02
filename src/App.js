import React from 'react';
import {Switch, BrowserRouter as Router, Link, Route} from 'react-router-dom'

import Moments from './Moments'
import Search from './Search'
import Home from './Home'
import Events from './Events'
import Auth from './Auth'
import CreateMoment from './CreateMoment'

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path='/moments'>
                <Moments/>
            </Route>
            <Route exact path='/search'>
                <Search/>
            </Route>
            <Route exact path='/home'>
                <Home/>
            </Route>
            <Route exact path='/events'>
                <Events/>
            </Route>
            <Route exact path='/auth'>
                <Auth/>
            </Route>
            <Route exact path='/moments/create'>
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
