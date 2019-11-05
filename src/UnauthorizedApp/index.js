import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from '../Auth'
import '../app.sass'

export default props => (
    <section className='sp-section'>
        <main className='sp-main'>
            <Router>
                <Switch>
                    <Route path='/'>
                        <Auth/>
                    </Route>
                </Switch>
            </Router>
        </main>
    </section>
)