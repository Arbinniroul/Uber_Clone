import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../../context/CaptainContext';
import axios from 'axios';

const CaptainProtector = ({ children }) => {
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('captaintoken');

    if (!token) {
      navigate('/captain-Login', { replace: true });
      return;
    }
    else{
        if(token && captain){
            if(location.pathname === '/captain-Login' || location.pathname === '/captain-Signup'){
                navigate('/', { replace: true });
            }
        }
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('captain', JSON.stringify(response.data.captain));
          setCaptain(response.data.captain);
          setIsLoading(false);
        } else {
          throw new Error('Unauthorized');
        }
      })
      .catch((error) => {
        console.error('Error fetching captain data:', error);
        localStorage.removeItem('captaintoken');
        localStorage.removeItem('captain');
        navigate('/captain-Login', { replace: true });
      });
  }, [navigate, setCaptain]);

  if (isLoading) return <div>Loading...</div>;

  return children;
};

export default CaptainProtector;
