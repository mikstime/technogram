import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.sass'

const Avatar = ({srcSet, to, alt, ...rest}) => (
    <div {...rest} className='avatar-holder'>
        <Link to={to}>
            <img alt={alt} srcSet={srcSet}/>
        </Link>
    </div>
)
Avatar.propTypes = {
    alt : PropTypes.string.isRequired,
    srcSet : PropTypes.string.isRequired,
    to : PropTypes.string,
}
Avatar.defaultProps = {
    to : '/NotFound'
}

export default Avatar