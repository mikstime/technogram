import React, { Component } from 'react'
import './style.sass'

import { Margin20Right } from '../../Primitives/Marginers'
import { LargeAvatar } from '../../Primitives/User/Avatars'
import Settings from './Settings'
import Counters from './Counters'
import Pseudonym from './Pseudonym'
import img from '../images/testAvatar.png'

export default class extends Component {

    render() {
        return(
            <header className='about-user'>
                <Margin20Right>
                    <LargeAvatar srcSet={img} alt='Set Avatar'/>
                </Margin20Right>
                <section className='user-info'>
                    <Settings/>
                    <Counters/>
                    <Pseudonym/>
                </section>
            </header>
        )
    }
}