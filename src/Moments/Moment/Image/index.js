import React from 'react'
import './style.sass'
import img from './testimage.png'

export default props => (
    <div>
        <img srcSet={img}/>
    </div>
)