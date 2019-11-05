import Navigation from '../Navigation'
import { Route, Switch } from 'react-router-dom'
import Search from '../Search'
import NotFoundPage from '../NotFound'
import UserPage from '../UserPage'
import Events from '../Events'
import CreateMoment from '../CreateMoment'
import { WithNetwork as StartPage } from '../StartPage'
import React from 'react'
import ImagePage from '../ImagePage'

export default props => (
        <section className='sp-section'>
            <Navigation/>
            <main className='sp-main'>
                    <Switch>
                        <Route path='/search'>
                            <Search/>
                        </Route>
                        <Route path='/users/'>
                            <UserPage/>
                        </Route>
                        <Route path='/events'>
                            <Events/>
                        </Route>
                        <Route path='/images/create'>
                            <CreateMoment/>
                        </Route>
                        <Route path='/images/'>
                            <ImagePage/>
                        </Route>
                        <Route exact path='/'>
                            <StartPage/>
                        </Route>
                        <Route>
                            <NotFoundPage/>
                        </Route>
                    </Switch>
            </main>
        </section>
)