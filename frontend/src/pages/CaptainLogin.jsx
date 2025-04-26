import React, { useState } from 'react'
import uberDriver from '../assets/uber-driver.svg'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [captainData, setCaptainData] = useState({})
        const handleSubmit=(e)=>{
        e.preventDefault()
        setEmail('')
        setPassword('')
        setCaptainData({ 
            email:email,
            password:password,
        })
    
        console.log(captainData)
    }
  return (
       <div className='p-7 h-screen flex flex-col  justify-between'>
    
    <div>
    <img className=' w-20 mb-3' src={uberDriver} alt="" />
    
    <form onSubmit={(e)=>{handleSubmit(e)}} >
                
                <h3 className='text-lg font-medium mb-2 '>What' s your email</h3>
                <input type="email" className='bg-[#eeeeee]  rounded px-4 mb-7  py-2 w-full text-lg placeholder:text-base outline-none  ' value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='email@example.com' />
                <h3 className='text-lg font-medium   mb-2 '>Enter password</h3>
                <input type="password"  className='bg-[#eeeeee]  rounded px-4 mb-7 py-2 w-full text-lg placeholder:text-base outline-none  ' value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder='password' />
                <button  className='bg-[#111] text-white border rounded px-4 mb-3  py-2 w-full text-lg placeholder:text-base outline-none  '  >Login</button>
               <p className='text-center '>Join a fleet ? <Link to={'/captain-signup'} className="mb-3 text-blue-600 ">Register as Driver</Link></p> 
    
     
            </form>
    </div>
    <div>
         <Link to={'/userLogin'}   className='bg-[#d5622d] flex items-center justify-center text-white border rounded px-4  py-2 w-full text-lg placeholder:text-base outline-none  '>Sign in as User</Link>
    </div>
        </div>
  )
}

export default CaptainLogin