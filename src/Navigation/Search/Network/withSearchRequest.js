import React, { Component } from 'react'
import { DOMAIN } from '../../../CONSTANTS'
import produce from 'immer'

export default function (WrappedComponent) {

    const API_URL_IMAGES = `${DOMAIN}/images/search`
    const API_URL_USERS = `${DOMAIN}/images/users`
    return class extends Component {

        state = {
            foundLElements : [

            ]
        }
        searchForImages = async ({requestBody}) => {
            const response = await fetch(API_URL_IMAGES,
                {
                    ...requestBody
                })
            if(response.status >= 200 && response.status <= 299) {
                //@TODO implement later when преподы доделают/объяснят
                this.setState(produce(() => (response.json().body)))
            } else {
                console.log(`Error fetching ${API_URL_IMAGES}`);
            }
        }
        searchForUsers = async ({requestBody}) => {
            const response = await fetch(API_URL_USERS,
                {
                    ...requestBody
                })
            if(response.status >= 200 && response.status <= 299) {
                //@TODO implement later when преподы доделают/объяснят
                this.setState(produce(() => (response.json().body)))
            } else {
                console.log(`Error fetching ${API_URL_USERS}`);
            }
        }
        onSearchRequest = async req => {
            try {
                const imgs = await this.searchForImages(req)
                const users = await this.searchForUsers(req)
                this.setState(produce(s => s.foundLElements = [ ...imgs, ...users ]))
            } catch ( e ) {
                console.log(`Unable to fetch. Try again later`)
            }
        }
        render() {
            return(
                <WrappedComponent
                    requestSearch={this.onSearchRequest}
                    {...this.props}
                    {...this.state}
                />
            )
        }

    }
}