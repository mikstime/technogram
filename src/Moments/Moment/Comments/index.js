import React from 'react'
import './style.sass'
import PropTypes from 'prop-types'
import Comment from './Comment'


const Comments = ({ comments, ...rest }) => (
    <div {...rest} className='comments-holder'>
        <ul>
            {
                comments.map(c =>(
                <Comment alt={c.author.avatar.alt}
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
    comments : PropTypes.arrayOf(PropTypes.shape({
        text : PropTypes.string.isRequired,
        author : PropTypes.shape({
            userName : PropTypes.string.isRequired,
            avatar : PropTypes.string.isRequired,
        }),
        likes : PropTypes.arrayOf(PropTypes.shape({
            userName : PropTypes.string.isRequired,
            avatar : PropTypes.string.isRequired,
        })),
        date : PropTypes.string.isRequired,
    })).isRequired,
}

export default Comments