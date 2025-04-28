import React, { useContext, useState } from 'react'
import uberDriver from '../assets/uber-driver.svg'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
const CaptainSignup = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    // Add vehicle related states
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState(0)
    const [vehicleType, setVehicleType] = useState('')
    const [userData, setUserData] = useState({})

    const {captain, setCaptain} = useContext(CaptainDataContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
       const CaptainData= { 
            fullName: {
                firstName: firstName,
                lastName: lastName,
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                type: vehicleType
            }
        }
       const response = axios.post(`${import.meta.env.VITE_BACKEND_URL}/captain/register`, CaptainData)
       if(response.status === 201){

        
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
        // Reset vehicle fields
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity(0)
        setVehicleType('')

    }
}

    return (
        <div className='p-4 h-screen flex flex-col justify-between'>
            <div>
                {/* Reduced image size */}
                <img className='w-16 mb-2' src={uberDriver} alt="" />

                <form onSubmit={handleSubmit}>
                    {/* Adjusted font sizes and margins */}
                    <h3 className='text-base font-medium mb-1.5'>What's our captain's name</h3>
                    <div className='flex gap-2 mb-3'>
                        <input 
                            type="text" 
                            className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 text-sm placeholder:text-sm outline-none' 
                            required 
                            placeholder='First Name'
                            value={firstName} 
                            onChange={(e)=>setFirstName(e.target.value)}
                        />
                        <input 
                            type="text" 
                            className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 text-sm placeholder:text-sm outline-none' 
                            placeholder='Last Name'
                            value={lastName} 
                            onChange={(e)=>setLastName(e.target.value)}
                        />
                    </div>

                    <h3 className='text-base font-medium mb-1.5'>What's our captain's email</h3>
                    <input 
                        type="email" 
                        className='bg-[#eeeeee] rounded px-3 py-1.5 text-sm placeholder:text-sm outline-none w-full mb-3' 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)} 
                        required 
                        placeholder='email@example.com' 
                    />

                    <h3 className='text-base font-medium mb-1.5'>Enter password</h3>
                    <input 
                        type="password"  
                        className='bg-[#eeeeee] rounded px-3 py-1.5 text-sm placeholder:text-sm outline-none w-full mb-3' 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)} 
                        required 
                        placeholder='password' 
                    />

                    {/* Vehicle Details Section */}
                    <h3 className='text-base font-medium mb-1.5'>Vehicle Details</h3>
                    <div className='flex flex-col gap-2 mb-3'>
                        <div className='flex gap-2'>
                            <input 
                                type="text" 
                                className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 text-sm placeholder:text-sm outline-none' 
                                value={vehicleColor} 
                                onChange={(e)=>setVehicleColor(e.target.value)} 
                                required 
                                placeholder='Color' 
                            />
                            <input 
                                type="text" 
                                className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 text-sm placeholder:text-sm outline-none' 
                                value={vehiclePlate} 
                                onChange={(e)=>setVehiclePlate(e.target.value)} 
                                required 
                                placeholder='Plate No.' 
                            />
                        </div>

                        <div className='flex gap-2'>
                            <select 
                                className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 text-sm outline-none appearance-none'
                                value={vehicleType} 
                                onChange={(e)=>setVehicleType(e.target.value)}
                                required
                            >
                                <option value="">Vehicle Type</option>
                                <option value="car">Car</option>
                                <option value="motorcycle">Motorcycle</option>
                                <option value="auto">Auto-Rickshaw</option>
                            </select>
                            
                            <input 
                                type="number" 
                                className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 text-sm placeholder:text-sm outline-none' 
                                value={vehicleCapacity} 
                                onChange={(e)=>setVehicleCapacity(Number(e.target.value))} 
                                required 
                                placeholder='Capacity'
                                min="1"
                                max="8"
                            />
                        </div>
                    </div>

                    {/* Adjusted button padding */}
                    <button className='bg-[#111] text-white rounded px-3 py-2 text-sm w-full mb-2'>
                        Create Captain's Account
                    </button>
                    
                    <p className='text-center text-sm'>
                        Already have an account? 
                        <Link to={'/userLogin'} className="text-blue-600 ml-1">Login</Link>
                    </p> 
                </form>
            </div>

            {/* Legal text adjustments */}
            <div className='mb-2'>
                <p className='text-[8px] leading-tight text-gray-400'>
                    By proceeding, you consent to get WhatsApp or SMS messages, including by automated means, 
                    from Uber and its affiliates to the email provided.
                </p>
            </div>
        </div>
    )
}

export default CaptainSignup