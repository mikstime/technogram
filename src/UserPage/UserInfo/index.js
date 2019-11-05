import React, { Component } from 'react'
import './style.sass'

import { Margin20Right } from '../../Primitives/Marginers'
import { LargeAvatar } from '../../Primitives/User/Avatars'
import Settings from './Settings'
import Counters from './Counters'
import Pseudonym from './Pseudonym'
import { UserPropTypes } from '../../PropTypes'
//@TODO refactor this page
export default class extends Component {

    static propTypes = {
        user : UserPropTypes.isRequired,
    }
    render() {

        const {user : {userName, avatar, pseudonym} } = this.props
        return(
            <header className='about-user'>
                <Margin20Right>
                    <LargeAvatar srcSet={avatar.srcSet}
                                 src={avatar.src}
                                 alt='Set Avatar'/>
                </Margin20Right>
                <section className='user-info'>
                    <Settings/>
                    <Counters/>
                    <Pseudonym pseudonym={pseudonym}/>
                </section>
            </header>
        )
    }
}