import React, { Component } from 'react'
import './style.sass'
import Moment from './Moment'

export default class extends Component {
    render() {
        return(
            <div className='moment-holder'>
                <Moment/>
            </div>
        )
    }
}