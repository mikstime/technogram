import React, { Component } from 'react'
import './style.sass'

import Image from './Image'
import UserInfo from './UserInfo'
import Comments from './Comments'
import Metrics from './Metrics'
import LeaveComment from './LeaveComment'

export default class extends Component {

    render() {
        return(
            <div className='moments-holder'>
                <article className='moment-article'>
                    <div>
                        <UserInfo/>
                        <Image/>
                        <Comments/>
                        <Metrics/>
                        <LeaveComment/>
                    </div>
                </article>
            </div>
        )
    }
}