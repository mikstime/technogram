import React, { useState } from 'react'
import './style.sass'
import ValidatedInput from '../../Templates/Input/ValidatedInput'

export default (props) => {
    const { placeholder, ...rest} = props
    const [focused, useFocused] = useState(false)
    const className = `validated-input ${focused ? 'validated-input-focused' : ''} ${ props.className || '' }`
    console.log(focused)
    return (
        <ValidatedInput
            { ...rest }
            className={ className }
            onFocus={(e) => useFocused(true)}
            onBlur={(e) => useFocused(false)}
            validProps={ {
                className : 'valid-input',
            } }
            invalidProps={ {
                className : 'invalid-input',
                children : [<span/>]
            } }
        >
            <span>{placeholder}</span>
        </ValidatedInput>
    )
}