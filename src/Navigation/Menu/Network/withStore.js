import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function (WrappedComponent) {

    const mapStateToProps = state => {
        return { user : {...state.user} }
    }
    WrappedComponent = connect(mapStateToProps)(WrappedComponent)
    return class extends Component {

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