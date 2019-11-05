import React, { Component } from 'react'
import './facebook.sass'
//import FacebookLogin from 'react-facebook-login';
export default class extends Component{

    responseFacebook = res => console.log(res)
    render() {
        return(
            <button {...this.props} className='facebook-button'>
                <span/>Log in with Facebook
            </button>
        )
    }

}
// {/*<FacebookLogin*/}
// {/*    appId="992476754448881"*/}
// {/*    autoLoad={true}*/}
// {/*    fields="name,email,picture"*/}
// {/*    callback={this.responseFacebook}*/}
// {/*    cssClass="my-facebook-button-class"*/}
// {/*    icon="fa-facebook"*/}
// {/*/>*/}
// {/*<button {...this.props} className='facebook-button'>*/}
// {/*    <span/>Log in with Facebook*/}
// {/*</button>*/}