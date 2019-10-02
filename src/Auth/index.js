import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
export default class extends Component {
    render() {
        return(
            <Switch>
                <Route path='/auth/signin/'>
                    <SignIn/>
                </Route>
                <Route path='/'>
                    <SignUp/>s
                </Route>
            </Switch>
        )
    }
}