import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

import { SmallAvatar } from '../../../../Primitives/User/Avatars'
import { SmallUserName } from '../../../../Primitives/User/Usernames'

const Comment = ({ userName, srcSet, alt, time, children, ...rest}) =>(
    <div {...rest} className='comment-holder' role="button">
        <li>
            <div className='comment-body'>
                <div className='comment-main'>
                    <div className='avatar'>
                        <SmallAvatar to={`/users/${userName}`} srcSet={srcSet} alt={alt}/>
                    </div>
                    <div className='comment'>
                            <SmallUserName to={`/users/${userName}`} userName={userName}/>
                            <span>
                                {children}
                            </span>
                            <div className='comment-time-wrapper'>
                                <div className='comment-time-holder'>
                                    <time className='comment-time'>
                                        {time}
                                    </time>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </li>
    </div>
)
Comment.propTypes = {
    userName : PropTypes.string.isRequired,
    srcSet : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired,
}

export default Comment