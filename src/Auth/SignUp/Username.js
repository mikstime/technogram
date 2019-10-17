import React from 'react'
import Input from './StyledInput'
import { NameRegEx } from '../Templates/utils'

export default props => (
    <Input
        validator={NameRegEx}
        placeholder='Username'
    />
)