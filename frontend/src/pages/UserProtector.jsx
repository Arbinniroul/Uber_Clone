import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../context/UserContext';
import { useNavigate, useLocation } from 'react-router-dom';

const UserProtector = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);

    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    useEffect(() => {
     
        if (!token || !storedUser) {
            if (location.pathname === '/') {

                navigate('/', { replace: true });
            }
        }

        else {
            if (location.pathname === '/userLogin' || location.pathname === '/userSignup') {
                navigate('/', { replace: true });
            }
        }

        setIsLoading(false);
    }, [navigate, location.pathname, token, storedUser]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return children;
};

export default UserProtector;
