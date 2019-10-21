import React from 'react'
import './style.sass'
import Comment from './Comment'
import LeaveComment from './LeaveComment'
import testImg from '../Image/testimage.png'

export default props => (
    <div className='comments-holder'>
        <Comment srcSet={testImg} userName={"mikstime"} alt={"test-img"}>
            Если в жизни появилась <a>#трещина</a>, то ее нужно заклеить <a>#трещины</a>
        </Comment>
        <LeaveComment/>
    </div>
)