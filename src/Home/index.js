import React, { Component } from 'react'
import UserInfo from './UserInfo'
import UserPosts from './UserPosts'

export default class extends Component {
    render() {
        return(
            <div className='home-page'>
                <UserInfo/>
                <div className='user-posts'>
                    <UserPosts/>
                </div>
            </div>
        )
    }
}