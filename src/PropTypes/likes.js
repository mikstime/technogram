import PropTypes from 'prop-types'

const LikesPropTypes =  PropTypes.arrayOf(PropTypes.shape({
    userName : PropTypes.string.isRequired,
}))

export default LikesPropTypes