import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'
import Post from '../Post'
import { PostPropTypes } from '../../../PropTypes'

const UserPostsRow = ({posts}) => {
    const tail = []
    for(let i = 0; i < 3 - posts.length %4; i++)
        tail.push(<div className='post-mock'/>)
    return (
        <div className='row-holder'>
            { posts.map(p => <Post key={p.id} post={p}/>) }
            {tail}
        </div>
    )
}
UserPostsRow.propTypes = {
    posts : PropTypes.arrayOf(PostPropTypes),
}
UserPostsRow.defaultProps = {
    posts : []
}

export default UserPostsRow