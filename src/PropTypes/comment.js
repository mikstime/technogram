import PropTypes from 'prop-types'
import UserPropTypes from './user'
import LikesPropTypes from './likes'

const CommentsPropTypes = PropTypes.shape({
    text : PropTypes.string.isRequired,
    author : UserPropTypes.isRequired,
    likes : LikesPropTypes.isRequired,
    date : PropTypes.string.isRequired,
})

export default CommentsPropTypes