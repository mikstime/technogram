import React, { Component } from 'react'
import UserInfo from './UserInfo'
import UserPosts from './UserPosts'
import withStore from './Network/withStore'
import withNetwork from './Network/withNetwork'
import { UserPropTypes } from '../PropTypes'
import { Redirect } from 'react-router-dom'
import './style.sass'

class UserPage extends Component {

    static propTypes = {
        user : UserPropTypes,
    }
    render() {
        const {user} = this.props
        if(user)
            return(
                <div className='user-page'>
                    <UserInfo user={user}/>
                    <div className='user-posts'>
                        <UserPosts posts={user.posts}/>
                    </div>
                </div>
            )
        return(
            <div className='user-page'>
                <Redirect to={'/NotFound'}/>
            </div>
        )
    }
}

export default withNetwork(withStore(UserPage))