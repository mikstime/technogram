import React from 'react'
import './style.sass'

export default ({text, ...rest}) => (
    <div className='or-line' {...rest}>
        <div className='line'/>
        <div className='or'>
            {text}
        </div>
        <div className='line'/>
    </div>
)