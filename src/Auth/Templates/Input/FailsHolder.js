import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import produce from 'immer'
import uuid from 'uuid/v4'

export default class extends Component {

    _keys = []
    static propTypes = {
        correctElems : PropTypes.array.isRequired,
        timesFailed : PropTypes.number.isRequired,
        Activator : PropTypes.elementType,
        onTry : PropTypes.func,
    }
    state = {
        timesFailed : 0
    }
    makeTry = () => {
        if(this.props.onTry) {
            if(!this.props.onTry() ) {
                this.setState(
                    produce(({timesFailed}) => {++timesFailed})
                )
                console.log(this.state.timesFailed)
            }
        } else {
            //@TODO do sth else
        }
    }
    render() {
        const {Activator = Fragment,
            timesFailed = this.state.timesFailed } = this.props
        if(!this._keys.length)
            this._keys = this.props.correctElems.map(uuid)

        return (
            <Fragment>
                {React.Children
                    .toArray(this.props.children)
                    .map(
                        (Element, i) => React.cloneElement(
                            Element, {
                                key : this._keys[i],
                                timesFailed,
                                isCorrect : this.props.correctElems &&
                                    this.props.correctElems[i]
                            }
                        )
                    )}
                    <Activator onClick={this.makeTry}/>
            </Fragment>)
    }
}