import preact from 'preact'
import { Router } from 'preact-router'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import ChatBox from './components/chatBox/ChatBox'

const urlPath = {
  home: '/',
  sign_up: '/sign_up',
  chat_room: '/chat_room'
}

const routes = (
  <Router>
    <Login path={urlPath.home} />
    <SignUp path={urlPath.sign_up} />
    <ChatBox path={urlPath.chat_room} />
  </Router>
)

export default routes

export {
  urlPath
}

