import React from 'react'
import './style.sass'

import { SmallUserName as UserName } from '../../../Primitives/User/Usernames'
import { SmallAvatar as Avatar } from '../../../Primitives/User/Avatars'
import img from '../Image/testimage.png'

export default props => (
    <header>
        <UserName userName='Mikstime'/>
        <Avatar srcSet={img} alt='Avatar'/>
    </header>
)