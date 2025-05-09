import React, { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../../context/UserContext'


const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})
    const {user, setUser} = useContext(UserDataContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const User = { 
            email: email,
            password: password,
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, User);
            
            if (response.status === 200 || response.status === 201) {
                const data = response.data;
                setUserData(data.user);
                 localStorage.setItem('token', data.token)
                 localStorage.setItem('user', data.user)
                setUser(data.user); 
                navigate('/');
            } else {
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message);
           
        } finally {
            setEmail('')
            setPassword('')
        }
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                  <div className='text-3xl mb-10 tracking-tighter font-medium'>Uber</div>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input 
                        type="email" 
                        className='bg-[#eeeeee] rounded px-4 mb-7 py-2 w-full text-lg placeholder:text-base outline-none' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        placeholder='email@example.com' 
                    />
                    <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                    <input 
                        type="password"  
                        className='bg-[#eeeeee] rounded px-4 mb-7 py-2 w-full text-lg placeholder:text-base outline-none' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        placeholder='password' 
                    />
                    <button className='bg-[#111] text-white border rounded px-4 mb-3 py-2 w-full text-lg placeholder:text-base outline-none'>Login</button>
                    <p className='text-center'>New here? <Link to={'/userSignup'} className="mb-3 text-blue-600">Create new Account</Link></p>
                </form>
            </div>
            <div>
                <Link to={'/captain-login'} className='bg-[#10b461] flex items-center justify-center text-white border rounded px-4 py-2 w-full text-lg placeholder:text-base outline-none'>Sign in as Driver</Link>
            </div>
        </div>
    )
}
export default UserLogin;