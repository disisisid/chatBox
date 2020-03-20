import preact from 'preact'
import { Router } from 'preact-router'
import Login from './components/auth/Login'
import ChatBox from './components/chatBox/ChatBox'
import App from './index'

const routes = (
  <Router>
    <Login path="/login" />
    {/* <App /> */}
  </Router>
)

export default routes

