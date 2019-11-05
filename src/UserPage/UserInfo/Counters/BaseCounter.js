import React from 'react'

export default ({value = 0, name}) => (
    <li className='counter'>
        <span>
            <span>
                {value}
            </span>
            {` ${name}`}
        </span>
    </li>
)