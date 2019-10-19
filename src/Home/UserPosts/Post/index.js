import React from 'react'
import './style.sass'
import img from '../../images/testAvatar.png'

export default props => (
    <div className='post-holder'>
        <img srcSet={img}/>
    </div>
)