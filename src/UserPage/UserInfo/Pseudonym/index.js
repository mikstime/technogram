import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

const Pseudonym = ({ pseudonym }) => (
    <div className='user-pseudonym'>
        <h1>
            {pseudonym}
        </h1>
        <br/>
    </div>
)
Pseudonym.propTypes = {
    pseudonym : PropTypes.string.isRequired,
}
Pseudonym.defaultProps = {
    pseudonym : 'No pseudonym'
}

export default Pseudonym