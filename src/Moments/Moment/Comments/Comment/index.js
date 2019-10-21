import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

import { SmallAvatar } from '../../../../Primitives/User/Avatars'
import { SmallUserName } from '../../../../Primitives/User/Usernames'

const Comment = ({ userName, srcSet, alt, children, ...rest}) =>(
    <div {...rest} className='comment-holder'>
        <div className='avatar'>
            <SmallAvatar srcSet={srcSet} alt={alt}/>
        </div>
        <div className='comment-body'>
                <SmallUserName userName={userName}/>{" "}
            <span>
                {children}
            </span>
        </div>
    </div>
)
Comment.propTypes = {
    userName : PropTypes.string.isRequired,
    srcSet : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired,
}

export default Comment