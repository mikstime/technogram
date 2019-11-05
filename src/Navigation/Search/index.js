import React, { Component } from 'react'
import PropTypes from 'prop-types'
import produce from 'immer'
import './style.sass'
import { SearchClearIcon, SearchIcon } from '../../Primitives/Icons'
import SearchMenu from '../../Search'
import SearchItem from '../../Search/SearchItem'

import testImage from '../../UserPage/images/testAvatar.png'
import withSearchRequest from './Network/withSearchRequest'

class Search extends Component {

    _inputRef = null
    state = {
        isOpen : false,
        input : ''
    }

    static propTypes = {
        requestSearch : PropTypes.func.isRequired
    }
    onInputFocus = event => {
        this.setState(produce(state => { state.isOpen = true }))
    }
    onInputBlur = event => {
        this.setState(produce(state => { state.isOpen = false }))
    }
    onInputChange = event => {
        const {value} = event.target
        this.setState(produce(state => { state.input = value}),
            () => this.props.requestSearch(this.state.input))
    }
    clearInput = () => {
        this._inputRef.value = '';
        this.setState(produce(s => {s.input = '' }))
    }
    render() {

        const { isOpen, input } = this.state
        return (
            <div className='search-holder'>
                <input onChange={ this.onInputChange }
                       onFocus={ this.onInputFocus }
                       ref={r => this._inputRef = r}
                       autoCapitalize="none" type="text" placeholder="Search"
                       className='search-input'/>
                <SearchIcon className='search-icon-holder'/>
                { isOpen && <div onClick={this.onInputBlur} className='search-mask' role='dialog'/> }
                { isOpen && input && <SearchMenu>
                    <SearchItem userName='mikstime' href='/users/mikstime' title='idk' alt='mikstime'
                                srcSet={ testImage }
                                pseudonym='Padre Mikstimio'/>
                    <SearchItem userName='mikstime' href='/users/mikstime' title='idk' alt='mikstime'
                                srcSet={ testImage }
                                pseudonym='Padre Mikstimio'/>
                    <SearchItem userName='mikstime' href='/users/mikstime' title='idk' alt='mikstime'
                                srcSet={ testImage }
                                pseudonym='Padre Mikstimio'/>
                    </SearchMenu>
                }
                {input &&
                <SearchClearIcon onClick={this.clearInput} role="button" tabIndex="0" className='search-clear-icon-holder'/>}
            </div>
        )
    }
}
export default Search

export const SearchWithNetwork = withSearchRequest(Search)