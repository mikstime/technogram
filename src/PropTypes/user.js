import PropTypes from 'prop-types'
import ImagePropTypes from './image'

const UserPropTypes = PropTypes.shape({
        userName : PropTypes.string.isRequired,
        avatar : ImagePropTypes.isRequired,
        pseudonym : PropTypes.string,
    })

export default UserPropTypes