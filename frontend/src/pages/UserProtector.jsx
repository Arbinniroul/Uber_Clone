import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';

 const UserProtector = ({ children }) => {
    const navigate = useNavigate();
    const { user } = useContext(UserDataContext);
    
    
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token || !user) {
            navigate('/userLogin', { replace: true });
        }
        
    }, [token, user, navigate]);

   
    if (!token && !user) return null;
    
    return children;
};
export default UserProtector;



