import React, { Component } from 'react'
import { DOMAIN } from '../../CONSTANTS'

export default function (WrappedComponent) {

    const API_URL = `${DOMAIN}/accounts/signup/`

    return class extends Component {


        onSignUp = ({ username, email, password })=> {
            fetch(API_URL, {
                "name": "Facebook Login",
                "description": "",
                "renders": [
                    "application/json",
                    "text/html"
                ],
                "parses": [
                    "application/json",
                    "application/x-www-form-urlencoded",
                    "multipart/form-data"
                ],
                "actions": {
                    "POST": {
                        "access_token": {
                            "type": "string",
                            "required": false,
                            "read_only": false,
                            "label": "Access token"
                        },
                        "code": {
                            "type": "string",
                            "required": false,
                            "read_only": false,
                            "label": "Code"
                        }
                    }
                }

            })
        }
        render() {
            return(
                <WrappedComponent
                    onSignUp={this.onSignUp}
                    {...this.props}
                    {...this.state}
                />
            )
        }
    }
}