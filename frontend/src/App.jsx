import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import UsersSignup from './pages/UsersSignup';
import UserLogin from './pages/UserLogin';
import Start from './pages/Start';
import UserProtector from './pages/UserProtector';
import UserLogout from './pages/UserLogout';
import Practice from './pages/Practice';
import CaptainHome from './pages/CaptainHome';
import CaptainProtector from './pages/CaptainProtector';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
  
      <Route element={<UserProtector> <Outlet /> </UserProtector>}>
        <Route path="/" element={<Home />} />
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
