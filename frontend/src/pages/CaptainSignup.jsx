import React, { useState } from 'react'
import uberDriver from '../assets/uber-driver.svg'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
         const [email, setEmail] = useState('')
            const [firstName, setFirstName] = useState('')
              const [lastName, setLastName] = useState('')
              const [password, setPassword] = useState('')
              const [userData, setUserData] = useState({})
              const handleSubmit=(e)=>{
              e.preventDefault()
              
              setUserData({ 
                  fullName:{
                      firstName:firstName,
                      lastName:lastName,
                  },
                  email:email,
                  password:password,
              })
          
              
              setEmail('')
              setPassword('')
              setFirstName('')
              setLastName
          }
  return (
      <div className='p-7 h-screen flex flex-col  justify-between'>
      
      <div>
    <img className=' w-20 mb-3' src={uberDriver} alt="" />


      
      <form onSubmit={(e)=>{handleSubmit(e)}} >
                    <h3 className='text-lg font-medium mb-2 '>What' s our captain's name</h3>
                    <div className='flex gap-4 mb-6'>
                    <input type="text" className='bg-[#eeeeee] w-1/2 rounded px-4   py-2  text-lg placeholder:text-lg outline-none  '  required placeholder='First Name'  value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                    <input type="text" className='bg-[#eeeeee] w-1/2 rounded px-4   py-2  text-lg placeholder:text-lg outline-none  '   placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                    </div>
                  
                                <h3 className='text-lg font-medium mb-2 '>What' s our captain's email</h3>
                  <input type="email" className='bg-[#eeeeee]  rounded px-4 mb-6  py-2  text-lg placeholder:text-lg outline-none  w-full' value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='email@example.com' />
                  <h3 className='text-lg font-medium   mb-2 '>Enter password</h3>
                  <input type="password"  className='bg-[#eeeeee]  rounded px-4 mb-6 py-2  text-lg placeholder:text-lg outline-none w-full ' value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder='password' />
                  <button  className='bg-[#111] text-white border rounded px-4 mb-3  py-2  text-lg placeholder:text-lg outline-none w-full '  >Signup</button>
                 <p className='text-center '>Already have an account? <Link to={'/userLogin'} className="mb-6 text-blue-600 ">Login</Link></p> 
      
       
              </form>
      </div>
      <div>
          <p className='text-[10px] leading-tight text-gray-400'>By proceeding, you consent to get WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the email provided.</p>
      </div>
          </div>
  )
}

export default CaptainSignup