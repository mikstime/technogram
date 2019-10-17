import React, { Component, Fragment } from 'react'

import StartPage from './Startpage'

export default class extends Component {
    render() {
        return(
            <Fragment>
                <StartPage/>
                {/*<Switch>*/}
                {/*    <Route path='/auth/signin/'>*/}
                {/*        <SignIn/>*/}
                {/*    </Route>*/}
                {/*    <Route path='/'>*/}
                {/*        <SignUp/>*/}
                {/*    </Route>*/}
                {/*</Switch>*/}
            </Fragment>
        )
    }
}