import React from 'react'
import FollowersCounter from './FollowersCounter'
import FollowingCounter from './FollowingCounter'
import PostsCounter from './PostsCounter'
import './style.sass'

export {
    FollowingCounter,
    PostsCounter,
    FollowersCounter
}
export default props => (
    <ul className='counters-holder' {...props}>
        <PostsCounter/>
        <FollowersCounter/>
        <FollowingCounter/>
    </ul>
)