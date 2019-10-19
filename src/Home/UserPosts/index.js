import React, { Component } from 'react'
import './style.sass'
import Row from './Row'

export default class extends Component {

    render() {
        return(
                <article>
                    <div className='rows-holder'>
                        <Row/>
                    </div>
                </article>
        )
    }
}