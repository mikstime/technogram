import PropTypes from 'prop-types'

const ImagePropTypes = PropTypes.shape({
    src : PropTypes.string,
    srcSet : PropTypes.string,
    alt : PropTypes.string,
})

export default ImagePropTypes