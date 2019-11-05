import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

const SearchResults = ({itemsToShow = [], children, ...rest} ) => (
    <div {...rest}>
        <div className='search-menu-triangle'/>
        <div className='search-menu-holder'>
            <div className='search-menu-body'>
                {children}
            </div>
        </div>
    </div>
)

SearchResults.propTypes = {
    fetchedItems : PropTypes.arrayOf({
        userName : PropTypes.string.isRequired,
        title : PropTypes.string.isRequired,
        pseudonym : PropTypes.string.isRequired,
        image : PropTypes.string.isRequired
    }),
}

export default SearchResults