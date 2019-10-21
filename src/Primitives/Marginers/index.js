import React from 'react'
import './style.sass'

const Margin20Left = props =>(
    <div className='margin-l-20'>
        {props.children}
    </div>
)
const Margin30Left = props =>(
    <div className='margin-l-30'>
        {props.children}
    </div>
)
const Margin20Right = props =>(
    <div className='margin-r-20'>
        {props.children}
    </div>
)
const Margin30Right = props =>(
    <div className='margin-r-30'>
        {props.children}
    </div>
)
const Margin5Right = props =>(
    <div className='margin-r-5'>
        {props.children}
    </div>
)
const Margin5Left = props =>(
    <div className='margin-l-5'>
        {props.children}
    </div>
)

export {
    Margin20Left,
    Margin30Left,
    Margin20Right,
    Margin30Right,
    Margin5Left,
    Margin5Right
}