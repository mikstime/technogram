import Navigation from '../Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Moments from '../Moments'
import Search from '../Search'
import UserPage from '../UserPage'
import Events from '../Events'
import CreateMoment from '../CreateMoment'
import { WithNetwork as StartPage } from '../StartPage'
import React from 'react'


export default props => (
    <section className='sp-section'>
        <Navigation/>
        <main className='sp-main'>
            <Router>
                <Switch>
                    <Route path='/moments'>
                        <Moments/>
                    </Route>
                    <Route path='/search'>
                        <Search/>
                    </Route>
                    <Route path='/users/'>
                        <UserPage/>
                    </Route>
                    <Route path='/events'>
                        <Events/>
                    </Route>
                    <Route path='/moments/create'>
                        <CreateMoment/>
                    </Route>
                    <Route>
                        <StartPage/>
                    </Route>
                </Switch>
            </Router>
        </main>
    </section>
)