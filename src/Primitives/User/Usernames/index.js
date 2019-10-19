import React from 'react'
import './style.sass'
import UserName from './UserName'

const SmallUserName = ({userName, ...rest}) => (
    <div className='username-small'>
        <UserName {...rest} userName={userName}/>
    </div>
)

const MediumUserName = ({userName, ...rest}) => (
    <div className='username-medium'>
        <UserName {...rest} userName={userName}/>
    </div>
)

const LargeUserName = ({userName, ...rest}) => (
    <div className='username-large'>
        <UserName {...rest} userName={userName}/>
    </div>
)

export {
    SmallUserName,
    MediumUserName,
    LargeUserName
}