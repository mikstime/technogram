import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

const UserName = ({userName}) => (
    <h1 className='user-name'>{userName}</h1>
)
UserName.propTypes=  {
    userName : PropTypes.string.isRequired
}

export default UserName