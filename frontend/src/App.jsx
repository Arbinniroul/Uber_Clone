import React, { useContext } from 'react'
import Home from './pages/Home'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UsersSignup from './pages/UsersSignup'
import UserLogin from './pages/UserLogin'
import { Route, Routes } from 'react-router-dom'
import { UserDataContext } from './context/UserContext'

const App = () => {
const ans=useContext(UserDataContext)
console.log(ans.user)
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/captain-login" element={<CaptainLogin/>} />
      <Route path="/captain-signup" element={<CaptainSignup/>} />
      <Route path="/userSignup" element={<UsersSignup/>} />
      <Route path="/userLogin" element={<UserLogin/>} />
        


     
    </Routes>
  )
}

export default App