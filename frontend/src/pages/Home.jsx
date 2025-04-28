import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='min-h-screen'> 
      <Navbar/>
       <div className='flex w-full px-15 py-20 gap-14 '>
          <div className='w-1/2 flex flex-col gap-20 '>
           <h1 className='text-6xl  font-semibold'>Go anywhere with Uber</h1>
          
          <div className='flex flex-col gap-2  w-96'>
            <input type="text" className='bg-gray-400' />
            <input type="text" className='bg-gray-400' />
            <div className='flex gap-2'>
                          
            <input type="text" className='w-1/2 bg-gray-400' /> 

<input type="text" className='w-1/2 bg-gray-400' />
          
            </div>
           
            <button></button>
            </div>


          </div>
          <div >
            <div className='w-full h-full bg-black '>

            hello
            </div>

          </div>

       </div>
    </div>
  )
}

export default Home