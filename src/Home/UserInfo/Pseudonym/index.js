import React from 'react'
import './style.sass'

export default ({ pseudonym = 'Padre Mikstimio' }) => (
    <div className='user-pseudonym'>
        <h1>
            {pseudonym}
        </h1>
        <br/>
    </div>
)