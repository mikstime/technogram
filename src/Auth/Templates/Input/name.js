import React, { Component } from 'react'
import { StyledValidatedInput as Input } from './ValidatedInput'
import { NameRegEx } from '../utils'

class NameInput extends Component {

    render() {
        const {textValue = 'Name', ...rest} = this.props
        return(
            <Input
                {...rest}
                validator={NameRegEx}
                inputProps={{
                    type : 'text',
                    name : 'name',
                    placeholder : textValue
                }}
            />
        )
    }

}

export default NameInput