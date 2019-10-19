import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

const Avatar = ({srcSet, alt}) => (
    <div className='avatar-holder'>
        <img alt={alt} srcSet={srcSet}/>
    </div>
)
Avatar.propTypes = {
    alt : PropTypes.string.isRequired,
    srcSet : PropTypes.string.isRequired
}

export default Avatar