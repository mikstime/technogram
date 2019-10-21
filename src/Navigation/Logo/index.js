import React from 'react'
import './style.sass'
import { InstagramLogo, InstagramMini } from '../../Primitives/Icons'
import { VerticalLine } from '../../Primitives/Separators'

export default props => (
    <div className='logo-holder'>
        <InstagramMini/>
        <VerticalLine/>
        <div className='instagram-logo-wrapper'>
            <InstagramLogo/>
        </div>
    </div>
)