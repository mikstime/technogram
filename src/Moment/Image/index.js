import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

const MomentImage = ({ srcSet, src, alt, ...rest }) => (
    <div className='moment-image-wrapper'>
        <div className='moment-image-holder' role="button" tabIndex="0">
            <div {...rest} className='moment-image-body'>
                <div className='moment-image-main'>
                    <img sizes="591px" decoding="auto"
                         alt={alt} src={src} srcSet={srcSet}/>
                </div>
                <div className='moment-image-mask'/>
            </div>
        </div>
    </div>
)
MomentImage.propTypes = {
    srcSet : PropTypes.string.isRequired,
    src : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired,
}
export default MomentImage