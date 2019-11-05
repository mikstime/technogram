import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'
import { Link } from 'react-router-dom'

const UserName = ({userName, to}) => (
    <h1 className='user-name'>
        { to ? <Link to={to}>{userName}</Link> : UserName }
    </h1>
)
UserName.propTypes=  {
    userName : PropTypes.string.isRequired,
    to : PropTypes.string,
}

export default UserName