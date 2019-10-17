import React from 'react'
import Input from './StyledInput'
import { PassRegEx } from '../Templates/utils'

export default props => (
    <Input
        validator={PassRegEx}
        placeholder='Password'
    />
)