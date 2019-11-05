import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export default function (WrappedComponent) {

    return withRouter(class extends Component {


        render() {
            return(
                <WrappedComponent
                    userName={this.props.location.pathname.split('/')[2]}
                    {...this.props}
                    {...this.state}
                />
            )
        }
    })
}