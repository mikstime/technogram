import React, { Component } from 'react'
import './style.sass'
import FbButton from '../Buttons/facebook'
import Title from './Title'
import SignUp from '../SignUp'
import OrLine from './OrLine'
import Logo from './Logo'
import Terms from './Terms'

class StartPage extends Component {

    render() {
        return(
            <div className='auth-holder'>
                <div className='signup-holder'>
                    <Logo/>
                    <Title/>
                    <FbButton/>
                    <OrLine text='OR'/>
                    <SignUp/>
                    <Terms/>
                </div>
                <div className='login-holder'>
                    <p>Have an account?
                    <a className='c-blue'> Log in</a></p>
                </div>
            </div>
        )
    }
}

export default StartPage