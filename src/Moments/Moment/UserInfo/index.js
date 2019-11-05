import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

import { SmallUserName as UserName } from '../../../Primitives/User/Usernames'
import { SmallAvatar as Avatar } from '../../../Primitives/User/Avatars'

const UserInfo = ({userName, src, srcSet, alt, ...rest}) => (
    <header {...rest} className='moment-user-info'>
            <Avatar to={`/users/${userName}`} src={src} srcSet={srcSet} alt={alt}/>
            <div className='user-info-wrapper'>
                <div className='user-name-max-width'>
                    <div className='username-small'>
                        <UserName to={`/users/${userName}`} userName={userName}/>
                    </div>
                </div>
            </div>
    </header>
)
UserInfo.propTypes = {
    userName : PropTypes.string.isRequired,
    srcSet : PropTypes.string.isRequired,
    src : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired,
}
export default UserInfo