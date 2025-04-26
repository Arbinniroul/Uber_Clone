import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const UserLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token');
            navigate('/userLogin');
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