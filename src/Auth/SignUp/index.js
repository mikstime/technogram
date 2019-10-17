import React, { Component } from 'react'
import produce from 'immer'
import { FailsHolder as InputHolder, onInputChange, } from '../Templates/Input'
import SignUp from '../Buttons/SignUp'
import FullName from './FullName'
import PhoneOrEmail from './PhoneOrEmail'
import Password from './Password'
import Username from './Username'

export default class extends Component {

    state = {
        timesFailed : 0
    }

    onInputChange = onInputChange(this)
    handleClick = () => {

        const {email, password} = this.state

        if(email && password) {
        } else {
            this.setState(produce(draft => {draft.timesFailed++}))
        }
    }
    tryToSignUp = () => {
        const { firstname, lastname, email, password } = this.state
        if(firstname && lastname && email && password) {
            return true;
        }
        return false;
    }
    render() {
        const { firstname, lastname, email, password } = this.state
        return(
            <div className='def-margin'>
                <InputHolder
                    correctElems={[firstname, lastname, email, password]}
                    onTry={this.tryToSignUp}
                    Activator={SignUp}
                >
                    <PhoneOrEmail/>
                    <FullName/>
                    <Username/>
                    <Password/>
                </InputHolder>
            </div>
        )
    }
}