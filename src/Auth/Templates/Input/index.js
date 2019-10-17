import Email from './email'
import Password from './password'
import Name from './name'
import FailWrapper from './withFails'
import onInputChange from './onInputChange'
import FailsHolder from './FailsHolder'
import AuthButton from './AuthButton'

export const EmailInput = Email
export const PasswordInput = Password
export const NameInput = Name
export const withFails = FailWrapper

export const FEmailInput = FailWrapper(Email)
export const FPasswordInput = FailWrapper(Password)
export const FNameInput = FailWrapper(Name)
export { onInputChange, FailsHolder, AuthButton }
