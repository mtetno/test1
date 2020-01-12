import React from 'react'
import autoBind from 'react-autobind'
import validator from 'validator'
import {connect} from 'react-redux'
import {userLogin} from '../modules/actions'
import LoginMarkup from '../Component/LoginMarkup'
import AppContext from '../../AppContext'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      email: '',
      password: '',
      isSubmitted: false,
      role: 'customer',
    }
    autoBind(this)
  }

  onLogin() {
    const {email, password} = this.state
    const {userLogin} = this.props
    this.setState({isSubmitted: true})
    if (this.validateEmail() && this.validatePassword()) {
      userLogin(email, password)
    }
  }

  emailChange(e) {
    this.setState({email: e.target.value})
  }

  passwordChange(e) {
    this.setState({password: e.target.value})
  }

  validateEmail() {
    const {email, isSubmitted} = this.state
    let isValid = true
    if (isSubmitted) {
      isValid =
        validator.isEmail(email) && !validator.isEmpty(email)
          ? true
          : process.env.REACT_APP_LOGIN_EMAIL_VALIDATION_TEXT
    } else {
      isValid =
        validator.isEmail(email) || validator.isEmpty(email)
          ? true
          : process.env.REACT_APP_LOGIN_EMAIL_VALIDATION_TEXT
    }
    return isValid
  }

  validatePassword() {
    let isValid = true
    const {password, isSubmitted} = this.state
    if (isSubmitted) {
      isValid = !validator.isEmpty(password)
        ? true
        : process.env.REACT_APP_LOGIN_PASSWORD_VALIDATION_TEXT
    } else {
      isValid = true
    }
    return isValid
  }

  render() {
    const {id, email, password, role} = this.state
    const {appState, history} = this.props

    if (appState.user.email !== undefined) {
      history.push('/dashboard')
    }

    return (
      <AppContext.Provider
        value={{
          id,
          email,
          password,
          role,
          emailChange: this.emailChange,
          passwordChange: this.passwordChange,
          onLogin: this.onLogin,
          validateEmail: this.validateEmail,
          validatePassword: this.validatePassword,
        }}
      >
        <LoginMarkup />
      </AppContext.Provider>
    )
  }
}

const mapStateToProps = (state) => ({
  appState: {
    user: state.user ? state.user : {},
  },
})

export default connect(mapStateToProps, {
  userLogin,
})(Login)
