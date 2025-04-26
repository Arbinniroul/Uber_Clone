import React, { useContext } from 'react'

import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UsersSignup from './pages/UsersSignup'
import UserLogin from './pages/UserLogin'
import { Route, Routes } from 'react-router-dom'
import { UserDataContext } from './context/UserContext'
import Start from './pages/Start'
import Home from './pages/Home'
import  UserProtector  from './pages/UserProtector'
import UserLogout from './pages/UserLogout'


const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/captain-signup" element={<CaptainSignup />} />
          
        
          <Route path="/userSignup" element={

                  <UsersSignup />

          } />
          <Route path="/userLogin" element={

                  <UserLogin />

          } />

          <Route path="/home" element={
            <UserProtector>
              <Home />
            </UserProtector>

          } />
          <Route path="/user/logout" element={
              <UserProtector>
                  <UserLogout />
              </UserProtector>
          } />
      </Routes>
  );
};

export default App