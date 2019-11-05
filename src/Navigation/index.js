import React from 'react'
import './style.sass'

import Logo from './Logo'
import { SearchWithNetwork as Search } from './Search'
import Menu from './Menu'

export default props => (
    <nav className='navigation-nav'>
        <div className='navigation-mask'/>
        <div className='nav-body'>
            <div className='nav-holder'>
                <div className='nav-main'>
                    <div className='nav-logo'>
                        <a href='/'>
                            <Logo/>
                        </a>
                    </div>
                    <div className='nav-search'>
                        <Search/>
                    </div>
                    <div className='nav-menu'>
                        <Menu/>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)