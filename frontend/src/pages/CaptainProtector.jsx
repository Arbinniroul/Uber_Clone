import React, { useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainProtector = ({ children }) => {
    const navigate = useNavigate();
    const { captain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true);
    const storedCaptain = localStorage.setItem('captain',captain);
    
   
    useEffect(() => {
      const token = localStorage.getItem('captaintoken');
      const storedUser = localStorage.getItem('captain');
  
      if (!token && !storedUser) {
        navigate('/captain-Login', { replace: true });
      } else {
        navigate('/captain-home', { replace: true });
      }
    }, [navigate]);
  
    if (isLoading) return <div>Loading...</div>;
    
    return children;
  };
export default CaptainProtector;



