import React from 'react'
import Input from './StyledInput'
import { EmailRegEx } from '../Templates/utils'

export default props => (
    <Input
        validator={EmailRegEx}
        autocomplete='tel'
        placeholder='Mobile Number or Email'
    />
)