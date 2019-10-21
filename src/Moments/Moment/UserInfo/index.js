import React from 'react'
import './style.sass'

import { SmallUserName as UserName } from '../../../Primitives/User/Usernames'
import { SmallAvatar as Avatar } from '../../../Primitives/User/Avatars'
import { Margin5Left, Margin5Right } from '../../../Primitives/Marginers'
import img from '../Image/testimage.png'

export default props => (
    <header className='moment-user-info'>
        <Margin5Right>
            <Avatar srcSet={img} alt='Avatar'/>
        </Margin5Right>
        <Margin5Left>
        <UserName userName='mikstime'/>
        </Margin5Left>
    </header>
)