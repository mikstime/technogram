import React from 'react'
import './style.sass'
import { SearchClearIcon, SearchIcon } from '../../Primitives/Icons'

export default (props) => (
    <div className='search-holder'>
        <input autoCapitalize="none" type="text" placeholder="Search" className='search-input'/>
        <SearchIcon className='search-icon-holder'/>
        <SearchClearIcon role="button" tabindex="0" className='search-clear-icon-holder'/>
    </div>
)