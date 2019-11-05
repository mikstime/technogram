import React, { Component } from 'react'
import { DOMAIN } from '../../CONSTANTS'

const WithMoments = function (WrappedComponent) {

    const API_URL = `${DOMAIN}/images/`
    return class extends Component {

        componentDidMount() {
            //@TODO implement GET request later
            try {
                fetch(API_URL, {})
            } catch ( e ) {
                console.log(`Unable to fetch ${API_URL}`)
            }
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
export default WithMoments