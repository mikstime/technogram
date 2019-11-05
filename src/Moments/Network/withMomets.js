import React, { Component } from 'react'
import { DOMAIN } from '../../CONSTANTS'

const NetworkWrapper = WrappedComponent => {

    const API_URL = new URL('/images/', DOMAIN)
    return class extends Component {


        componentDidMount() {
            console.log('WILL_MOUNT')
            fetch(API_URL,
                {
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    mode: 'no-cors', // no-cors, *cors, same-origin
                    redirect: 'follow',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    }
                }
            ).then( e => e.text()).then(console.log).catch(console.log)
        }

        render() {
            return(
                <WrappedComponent
                    {...this.props}
                    {...this.state}
                />
            )
        }
    }
}

export default NetworkWrapper