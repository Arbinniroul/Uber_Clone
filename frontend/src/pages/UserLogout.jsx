import React, { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
const UserLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
            const {user,setUser}=useContext(UserDataContext);
    
    axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/');

            setUser(null);
            console.log('Logout successful');

        } else {
            console.error('Error logging out');
        }
    })
  return (
    <div>UserLogout</div>
  )
}

export default UserLogout