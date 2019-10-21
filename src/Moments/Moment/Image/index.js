import React from 'react'
import './style.sass'
import img from './testimage.png'

export default props => (
    <div className='image-holder'>
        <div>
        <img srcSet={img}/>
        </div>
    </div>
)