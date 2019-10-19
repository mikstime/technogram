import React from 'react'

import Avatar from './Avatar'
import './style.sass'

const LargeAvatar = ({alt, srcSet, ...rest}) => (
    <div className='avatar-large'>
        <Avatar {...rest} alt={alt} srcSet={srcSet}/>
    </div>
)
const MediumAvatar = ({alt, srcSet, ...rest}) => (
    <div className='avatar-medium'>
        <Avatar {...rest} alt={alt} srcSet={srcSet}/>
    </div>
)
const SmallAvatar = ({alt, srcSet, ...rest}) => (
    <div className='avatar-small'>
        <Avatar {...rest} alt={alt} srcSet={srcSet}/>
    </div>
)

export {
    LargeAvatar,
    MediumAvatar,
    SmallAvatar
}