import React from 'react'
import './style.sass'
import { LikesIcon, UserIcon } from '../../Primitives/Icons'
import { Margin30LeftNF as Margin30Left } from '../../Primitives/Marginers'

export default props => (
    <div className='menu-holder'>
        <Margin30Left>
            <LikesIcon/>
        </Margin30Left>
        <Margin30Left>
            <UserIcon/>
        </Margin30Left>
    </div>
)