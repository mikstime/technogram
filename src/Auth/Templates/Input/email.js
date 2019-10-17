import React, { Component } from 'react'
import { StyledValidatedInput as Input } from './ValidatedInput'
import { EmailRegEx } from '../utils'

class EmailInput extends Component {


    render() {
        console.log(this.props.timesFailed)
        return(
            <Input
                {...this.props}
                validator={EmailRegEx}
                inputProps={{
                    type : 'text',
                    name : 'email',
                    placeholder : 'Email'
                }}
            />
        )
    }

}

export default EmailInput