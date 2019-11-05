import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function (WrappedComponent) {

    const mapStateToProps = (state, {userName}) => {
        return userName in state.users ?
            {
                user : { ...state.users[userName] }
            } : {
                //Don't provide any user object
            }
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