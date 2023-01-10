import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import LoginPage from './pages/LoginPage'
import Register from './pages/Register'
import ChatHomePage from './pages/ChatHomePage'
import Chat from './pages/Chat'


function App() {
  
// Create a client
const queryClient = new QueryClient();

  return (
    // routes 
    <div className=' '>
       <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
      <Router>
        <QueryClientProvider client={queryClient}>
        <Routes>
         <Route path = '/'
         element = {<LoginPage/>}
         
         />
          <Route path = 'login'
         element = {<LoginPage/>}
         />
          <Route path = 'register'
         element = {<Register/>}
         />

          <Route path = 'chat-home'
         element = {<ChatHomePage/>}         
         />
         <Route path = 'chat/:bothUserId'
         element = {<Chat/>}         
         />




        </Routes>
      </QueryClientProvider>

      </Router> 

      
    </div>
  )
}

export default App
