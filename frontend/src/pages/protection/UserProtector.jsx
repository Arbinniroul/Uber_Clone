import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../../context/UserContext';

const UserProtector = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      const openRoutesBeforeLogin = ['/', '/userLogin', '/userSignup'];
      const authRequiredRoutes = ['/user-service'];

      
      if ((!token || !storedUser) && authRequiredRoutes.includes(location.pathname)) {
        navigate('/userLogin', { replace: true });
        setIsLoading(false);
        return;
      }

      if (!token || !storedUser) {
        setIsLoading(false);
        return;
      }


      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/profile`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.status === 200) {
          const userData = response.data.user;
          localStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);

         
          if (['/userLogin', '/userSignup'].includes(location.pathname)) {
            navigate('/', { replace: true });
          }
        } else {
          throw new Error('Unauthorized');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        navigate('/userLogin', { replace: true });
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [location.pathname, navigate, setUser]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return children;
};

export default UserProtector;
