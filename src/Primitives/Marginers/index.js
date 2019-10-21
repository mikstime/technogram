import React from 'react'
import './style.sass'

const Margin20LeftNF = props =>(
    <div {...props} className='margin-l-20-nf'/>
)
const Margin30LeftNF = props =>(
    <div {...props} className='margin-l-30-nf'/>
)
const Margin20RightNF = props =>(
    <div {...props} className='margin-r-20-nf'/>
)
const Margin30RightNF = props =>(
    <div {...props} className='margin-r-30-nf'>
    </div>
)
const Margin5RightNF = props =>(
    <div {...props} className='margin-r-5-nf'/>
)
const Margin5LeftNF = props =>(
    <div {...props} className='margin-l-5-nf'/>
)
const Margin20Left = props =>(
    <div {...props} className='margin-l-20'/>
)
const Margin30Left = props =>(
    <div {...props} className='margin-l-30'/>
)
const Margin20Right = props =>(
    <div {...props} className='margin-r-20'/>
)
const Margin30Right = props =>(
    <div {...props} className='margin-r-30'/>
)
const Margin5Right = props =>(
    <div {...props} className='margin-r-5'/>
)
const Margin5Left = props =>(
    <div {...props} className='margin-l-5'/>
)

export {
    Margin20Left,
    Margin30Left,
    Margin20Right,
    Margin30Right,
    Margin5Left,
    Margin5Right,
    Margin5LeftNF,
    Margin5RightNF,
    Margin20LeftNF,
    Margin20RightNF,
    Margin30LeftNF,
    Margin30RightNF,
}