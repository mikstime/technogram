import React, { Component } from 'react'
import { DOMAIN } from '../../../CONSTANTS'

export default function (WrappedComponent) {
    const API_URL = `${DOMAIN}/accounts/facebook/login`
    console.log(API_URL)
    return class extends Component {


        onFacebookLogin = event => {

            fetch(API_URL, {
                mode: 'no-cors',
                redirect: 'follow',
                method: 'POST',
                headers: {
                    //'Content-Type': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                // body: JSON.stringify({
                //
                // })
            })
                .then(e => e)
                .then(e => console.log(e.status))
                .catch(console.log)

        }
        render() {
            return(
                <WrappedComponent
                    onFacebookLogin={this.onFacebookLogin}
                    {...this.props}
                    {...this.state}
                />
            )
        }
    }
}