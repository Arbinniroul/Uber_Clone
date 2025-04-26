import React from 'react'
import uberIMG from '../assets/uber.png'
import { Link } from 'react-router-dom'
const Home = () => {

  return (
    <div className='bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c5310f182519763.652f3606b64b0.jpg)] bg-cover bg-center h-screen pt-8 flex flex-col justify-between  bg-red-400'>
        <img className='h-10 ml-9 w-19' src={uberIMG} alt="" />
        <div className='bg-white py-4 px-4 pb-7'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to={'/userLogin'} className='flex justify-center w-full bg-black text-white py-3 rounded mt-2'>Continue</Link>
        </div>
    </div>
  )
}

export default Home