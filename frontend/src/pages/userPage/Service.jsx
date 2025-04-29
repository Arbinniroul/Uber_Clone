import React, { useEffect, useState } from 'react';
import uberMap from "../../assets/ubermap.png";
import { Calendar, Clock, Dot, Send, Square } from 'lucide-react';
import { motion } from 'framer-motion';

const UserService = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    
    setTimeout(() => {
      setLoaded(true);
    }, 100); 
  }, []);

  return (
    <div className='min-h-screen relative bg-white overflow-hidden'>
   
<motion.img
  src={uberMap}
  initial={{ scale: 0.01, borderRadius: '100%', opacity: 0 }}
  animate={{ scale: 1, borderRadius: '0%', opacity: 1 }}
  transition={{ duration: 1.1, delay: 0.5, ease: 'easeInOut' }}
  className="w-full h-full object-cover absolute top-0 left-0 z-0"
/>


<motion.div
  initial={{
    top: '60%',
    left: '3.75rem', 
    opacity: 0,
    scale: 0.9,
    position: 'absolute',
  }}
  animate={{
    top: '13%',
    left: '5%',
    opacity: 1,
    scale: 1,
    position: 'absolute',
  }}
  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
  className='z-10 w-[90%] sm:w-[400px] px-8 py-10 bg-[#ffffff] hover:bg-[#ffffff]/90 rounded-xl shadow-lg'
>
<div className='bg-[#f3f3f3] py-1 px-4 gap-4  rounded group flex items-center justify-start relative focus-within:ring-2 mb-3 focus-within:ring-offset-2 focus-within:ring-black' >
          <Dot className='size-2 stroke-2 bg-black rounded-full ' />
          <input type="text" className='outline-none py-2 bg-transparent w-full' placeholder='Pickup location' autoFocus  />
          <Send className='absolute right-3' />
        </div>

      
        <div className="flex justify-center z-10 my-2 top-16 left-13 absolute">
          <div className="border-l border-black h-10 w-0"></div>
        </div>


        <div className='bg-[#f3f3f3] py-1 px-4 gap-4 rounded group flex items-center justify-start relative focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black'>
          <Square className='size-2 stroke-2 bg-black' />
          <input type="text" className='outline-none py-2 bg-transparent w-full' placeholder='Dropoff Location' />
        </div>

        {/* Date and Time */}
        <div className='flex gap-2 mt-4'>
          <div className='bg-[#f3f3f3] w-1/2 py-2 px-4 gap-3 rounded group flex items-center focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black'>
            <Calendar className='size-4' />
            <input type="date" className='outline-none py-2 flex-1 bg-transparent' />
          </div>

          <div className='bg-[#f3f3f3] w-1/2 py-2 px-4 gap-4 rounded group flex items-center focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black'>
            <Clock className='size-4' />
            <input type="time" className='outline-none py-2 flex-1 bg-transparent' />
          </div>
        </div>


        <div className='flex gap-4 mt-6 justify-center'>
          <button className='px-6 py-3 bg-black text-white rounded-lg hover:bg-black/85 transition'>See Prices</button>
          <button className='text-gray-600 border-b border-gray-400'>Find Driver</button>
        </div>
</motion.div>


       
    </div>
  );
};

export default UserService;
