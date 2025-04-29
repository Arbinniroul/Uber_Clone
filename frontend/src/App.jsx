import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import CaptainLogin from './pages/captainPage/CaptainLogin';
import CaptainSignup from './pages/captainPage/CaptainSignup';
import UsersSignup from './pages/userPage/UsersSignup';
import UserLogin from './pages/userPage/UserLogin';
import Start from './pages/Start';
import UserProtector from './pages/protection/UserProtector';
import UserLogout from './pages/userPage/UserLogout';
import Practice from './pages/Practice';
import CaptainHome from './pages/captainPage/CaptainHome';
import CaptainProtector from './pages/protection/CaptainProtector';
import Home from './pages/userPage/Home';
import UserService from './pages/userPage/Service';

const App = () => {
  return (
    <Routes>
  
      <Route element={<UserProtector> <Outlet /> </UserProtector>}>
        <Route path="/" element={<Home />} />
        <Route path="/user-service" element={<UserService />} />
        
      

        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/userSignup" element={<UsersSignup />} />
        <Route path="/user/logout" element={<UserLogout />} />
      </Route>

    
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
      <Route path="/captain-home" element={
        <CaptainProtector>
          <CaptainHome />
        </CaptainProtector>
      } />


      <Route path="/practice" element={<Practice />} />
    </Routes>
  );
};

export default App;
