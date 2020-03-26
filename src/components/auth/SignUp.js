import { Component } from 'preact'
import { route } from 'preact-router'
import { urlPath } from '../../routes'
import '../../style/auth.css'

class SignUp extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSetUserInfo = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

    /** Check user input is vaild or not before route */
    handleCheckAuth() {
    
      // LOGIC TO CHECK USER INPUT
  
      // if (this.state.username !== '' && this.state.password) {
      //   // Route to chatbox component
      //   route({
      //     url: urlPath.chat_room
      //   })
      // } else {
      //   // Error
      //   alert('Please try again.')
      // }
  
      route({
        url: urlPath.chat_room
      })
    }

  handleRouteToLoginIn = () => {
    route({
      url: urlPath.home
    })
  }

  render() {
    return (
      <form class="auth_container">
        <h1>Create a new Account</h1>
        <div class="auth_items">
          <h2>Enter username:</h2>
          <input type="text" name="username" placeholder="Enter username..." oninput={this.handleSetUserInfo}/>
        </div>
        <div class="auth_items">
          <h3>Enter password:</h3>
          <input type="password" name="password" placeholder="Enter password..." oninput={this.handleSetUserInfo}/>
        </div>
        <div class="auth_control_container">
          <button type="submit" onclick={this.handleCheckAuth}>Create account</button>
          <button onclick={this.handleRouteToLoginIn}>I already have an account</button>
        </div>
      </form>
    )
  }
}

export default SignUp