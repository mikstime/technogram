import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'
import Post from '../Post'
import { PostPropTypes } from '../../../PropTypes'

const UserPostsRow = ({posts}) => (
    <div className='row-holder'>
        {posts.map( p => <Post {...p}/>)}
    </div>
)
UserPostsRow.propTypes = {
    posts : PropTypes.arrayOf(PostPropTypes),
}
UserPostsRow.defaultProps = {
    posts : []
}

export default UserPostsRow