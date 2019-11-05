import React, { Component } from 'react'
import UserInfo from './UserInfo'
import UserPosts from './UserPosts'
import withStore from './Network/withStore'
import withNetwork from './Network/withNetwork'
import { UserPropTypes } from '../PropTypes'
import { Link } from 'react-router-dom'

class UserPage extends Component {

    static propTypes = {
        user : UserPropTypes,
    }
    render() {
        const {user} = this.props
        if(user)
            return(
                <div className='home-page'>
                    <UserInfo user={user}/>
                    <div className='user-posts'>
                        <UserPosts posts={user.posts}/>
                    </div>
                </div>
            )
        return(
            <div className='home-page'>
                <Link to={'/'}>
                No user was found
                </Link>
            </div>
        )
    }
}

export default withNetwork(withStore(UserPage))