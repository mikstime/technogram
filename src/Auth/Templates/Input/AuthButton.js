import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default function (title) {
    return class extends Component {

        static propTypes = {
            onClick : PropTypes.func
        }
        render() {

            const {onClick, ...style} = this.props
            return(
                <div {...style} onClick={onClick}>
                    {title}
                </div>
            )
        }
    }
}