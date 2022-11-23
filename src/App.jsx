import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Register from './pages/Register'
import ChatHomePage from './pages/ChatHomePage'
import Chat from './pages/Chat'


function App() {

  return (
    // routes 
    <div className=' '>
      <Router>
        <Routes>
         <Route path = '/'
         element = {<Register/>}
         
         />
          <Route path = 'login'
         element = {<LoginPage/>}
         />
          <Route path = 'chat-home'
         element = {<ChatHomePage/>}         
         />
         <Route path = 'chat'
         element = {<Chat/>}         
         />




        </Routes>
      </Router> 

      
    </div>
  )
}

export default App
