import React, { useState } from 'react'
import uberDriver from '../assets/uber-driver.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainLogin = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [captainData, setCaptainData] = useState({})
        const navigate=useNavigate()
        const handleSubmit=async(e)=>{
        e.preventDefault()
        const captainSubmitData={
            email:email,
            password:password,
        };
        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`,captainSubmitData)
      
        if(response.status==200){
          const data = response.data;
          setCaptainData(data.captain);
           localStorage.setItem('captaintoken', data.token)

         
          navigate('/home-captain');
        
            navigate('/captain-home')

        }
        else{
           console.log('error')

        }
        setEmail('')
        setPassword('')
       

    
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
                <button  className='bg-[#111] text-white border rounded px-4 mb-3  py-2 w-full text-lg placeholder:text-base outline-none  ' onClick={handleSubmit} >Login</button>
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