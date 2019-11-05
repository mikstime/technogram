import React from 'react'
import './style.sass'
import { LikesIcon, UserIcon } from '../../Primitives/Icons'
import { Margin30LeftNF as Margin30Left } from '../../Primitives/Marginers'
import { Link } from 'react-router-dom'
import { UserPropTypes } from '../../PropTypes'
import withStore from './Network/withStore'

const Menu = ({user : {userName}}) => (
    <div className='menu-holder'>
        <Margin30Left>
            <LikesIcon/>
        </Margin30Left>
        <Margin30Left>
            <Link to={`/users/${userName}`}>
                <UserIcon/>
            </Link>
        </Margin30Left>
    </div>
)
Menu.propTypes = {
    user : UserPropTypes.isRequired,
}
export default withStore(Menu)