import PropTypes from 'prop-types'
import UserPropTypes from './user'
import ImagePropTypes from './image'
import LikesPropTypes from './likes'

const PostPropTypes = PropTypes.shape({
    author : UserPropTypes.isRequired,
    image : ImagePropTypes.isRequired,
    date : PropTypes.string,
    likes : LikesPropTypes.isRequired,
    id : PropTypes.string.isRequired,
})

export default PostPropTypes