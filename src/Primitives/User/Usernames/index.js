import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'
import UserName from './UserName'
import { Link } from 'react-router-dom'

const SmallUserName = ({userName, to, ...rest}) => (
    <h2 {...rest} >
        <Link to={to}>
            {userName}
        </Link>
    </h2>
)
SmallUserName.propTypes = {
    userName : PropTypes.string.isRequired,
    to : PropTypes.string
}

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