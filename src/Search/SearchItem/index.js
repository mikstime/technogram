import React from 'react'
import './style.sass'
import { SmallAvatar as Avatar } from '../../Primitives/User/Avatars'

export default ({ srcSet, alt, userName, title, href, pseudonym }) =>(
    <a href={href} className='search-item-holder'>
        <div className='search-item-body'>
            <div className='search-item-avatar'>
                    <Avatar srcSet={srcSet} alt={alt}/>
            </div>
            <div className='search-item-main'>
                <span className='search-item-username'>{ userName }</span>
                <span className='search-item-pseudonym'>{ pseudonym }</span>
            </div>
        </div>
    </a>
)