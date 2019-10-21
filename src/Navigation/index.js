import React from 'react'
import './style.sass'

import Logo from './Logo'
import Search from './Search'
import Menu from './Menu'

export default props => (
    <nav className='navigation-nav'>
        <div className='navigation-mask'/>
        <div className='nav-body'>
            <div className='nav-holder'>
                <div className='nav-main'>
                    <div className='nav-logo'>
                        <a>
                            <Logo/>
                        </a>
                    </div>
                    <div className='nav-search'>
                        <a>
                            <Search/>
                        </a>
                    </div>
                    <div className='nav-menu'>
                        <a>
                            <Menu/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)