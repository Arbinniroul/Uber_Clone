import React, { useContext, useState } from 'react';
import uberDriver from '../assets/uber-driver.svg';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        vehicleColor: '',
        vehiclePlate: '',
        vehicleCapacity: 0,
        vehicleType: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { setCaptain } = useContext(CaptainDataContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'vehicleCapacity' ? Number(value) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const captainData = { 
                fullName: {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                },
                email: formData.email,
                password: formData.password,
                vehicle: {
                    color: formData.vehicleColor,
                    plate: formData.vehiclePlate,
                    capacity: formData.vehicleCapacity,
                    vehicleType: formData.vehicleType
                }
            };

            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/captain/register`, 
                captainData
            );

            if (response.status === 201) {
                setCaptain(response.data.captain);
                localStorage.setItem('captaintoken', response.data.token);


                navigate('/captain-home');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
            } finally {
            setLoading(false);
        }
    };

    return (
        <div className='p-4 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-2' src={uberDriver} alt="Uber Driver" />
                
                {error && (
                    <div className="mb-3 text-red-500 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <h3 className='text-base font-medium mb-1.5'>What's our captain's name</h3>
                    <div className='flex gap-2 mb-3'>
                        <input 
                            type="text" 
                            name="firstName"
                            className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 text-sm placeholder:text-sm outline-none' 
                            required 
                            placeholder='First Name'
                            value={formData.firstName} 
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            name="lastName"
                            className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 text-sm placeholder:text-sm outline-none' 
                            placeholder='Last Name'
                            value={formData.lastName} 
                            onChange={handleChange}
                        />
                    </div>

                    <h3 className='text-base font-medium mb-1.5'>What's our captain's email</h3>
                    <input 
                        type="email" 
                        name="email"
                        className='bg-[#eeeeee] rounded px-3 py-1.5 text-sm placeholder:text-sm outline-none w-full mb-3' 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        placeholder='email@example.com' 
                    />

                    <h3 className='text-base font-medium mb-1.5'>Enter password</h3>
                    <input 
                        type="password"  
                        name="password"
                        className='bg-[#eeeeee] rounded px-3 py-1.5 text-sm placeholder:text-sm outline-none w-full mb-3' 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                        placeholder='password' 
                        minLength="6"
                    />

                    <h3 className='text-base font-medium mb-1.5'>Vehicle Details</h3>
                    <div className='flex flex-col gap-2 mb-3'>
                        <div className='flex gap-2'>
                            <input 
                                type="text" 
                                name="vehicleColor"
                                className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 text-sm placeholder:text-sm outline-none' 
                                value={formData.vehicleColor} 
                                onChange={handleChange} 
                                required 
                                placeholder='Color' 
                            />
                            <input 
                                type="text" 
                                name="vehiclePlate"
                                className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 text-sm placeholder:text-sm outline-none' 
                                value={formData.vehiclePlate} 
                                onChange={handleChange} 
                                required 
                                placeholder='Plate No.' 
                            />
                        </div>

                        <div className='flex gap-2'>
                            <select 
                                name="vehicleType"
                                className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 text-sm outline-none appearance-none'
                                value={formData.vehicleType} 
                                onChange={handleChange}
                                required
                            >
                                <option value="">Vehicle Type</option>
                                <option value="car">Car</option>
                                <option value="motorcycle">Motorcycle</option>
                                <option value="auto">Auto-Rickshaw</option>
                            </select>
                            
                            <input 
                                type="number" 
                                name="vehicleCapacity"
                                className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 text-sm placeholder:text-sm outline-none' 
                                value={formData.vehicleCapacity} 
                                onChange={handleChange} 
                                required 
                                placeholder='Capacity'
                                min="1"
                                max="8"
                            />
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className='bg-[#111] text-white rounded px-3 py-2 text-sm w-full mb-2 disabled:opacity-50'
                        disabled={loading}
                    >
                        {loading ? 'Creating Account...' : 'Create Captain\'s Account'}
                    </button>
                    
                    <p className='text-center text-sm'>
                        Already have an account? 
                        <Link to={'/userLogin'} className="text-blue-600 ml-1">Login</Link>
                    </p> 
                </form>
            </div>

            <div className='mb-2'>
                <p className='text-[8px] leading-tight text-gray-400'>
                    By proceeding, you consent to get WhatsApp or SMS messages, including by automated means, 
                    from Uber and its affiliates to the email provided.
                </p>
            </div>
        </div>
    );
};

export default CaptainSignup;