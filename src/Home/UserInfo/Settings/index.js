import React, { Fragment } from 'react'
import './style.sass'
import { LargeUserName as UserName } from '../../../Primitives/User/Usernames'

const EditProfile = props => (
    <a className='edit-profile-button'>
    <button>
        Edit Profile
    </button>
    </a>
)
const Settings = props => (
    <div className='edit-profile-gear'>
        <button>
            {/*<span/>*/}
        </button>
    </div>
)
export default props => (
    <Fragment>
        <div className='settings-holder'>
            <UserName userName='mikstime'/>
            <EditProfile/>
            <Settings/>
        </div>
    </Fragment>
)