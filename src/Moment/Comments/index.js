import React from 'react'
import './style.sass'
import PropTypes from 'prop-types'
import Comment from './Comment'
import { CommentPropTypes } from '../../PropTypes'


const Comments = ({ comments, ...rest }) => (
    <div {...rest} className='comments-holder'>
        <ul>
            {
                comments.map(c =>(
                <Comment key={c.id}
                         alt={c.author.avatar.alt}
                         srcSet={c.author.avatar.srcSet}
                         userName={c.author.userName}
                         time={c.date}>
                    {c.text}
                </Comment>))
            }
        </ul>
    </div>
)
Comments.propTypes = {
    comments : PropTypes.arrayOf(CommentPropTypes.isRequired),
}

export default Comments