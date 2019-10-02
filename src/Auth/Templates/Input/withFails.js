import React, { Component } from 'react'
import produce from 'immer'
export default function (WrappedComponent) {

    return class extends Component {

        timeoutId = null
        __timesFailed = 0
        render() {
            const {__timesFailed} = this
            const {isCorrect, timesFailed, ...rest} = this.props
            if(!isCorrect) {
                if ( __timesFailed === timesFailed ) {
                    if ( this.timeoutId )
                        clearTimeout(this.timeoutId)

                } else if ( __timesFailed <= timesFailed ) {
                    this.timeoutId = setTimeout(
                        () => {
                            this.__timesFailed = timesFailed
                            this.setState(state => ({ ...state }))
                        },
                        200
                    )
                } else {
                    if ( this.timeoutId )
                        clearTimeout(this.timeoutId)
                    this.__timesFailed = timesFailed
                }
            }
            return(
                <WrappedComponent
                    {...rest}
                    className={isCorrect || timesFailed === __timesFailed ? '' : 'was-failed'}
                    />
            )
        }

    }
}