import React from 'react'
import Navbar from '../components/Navbar'
import { BatteryLow, Calendar, Calendar1, CalendarPlus, CalendarPlusIcon, Circle, Clock, Dot, DotSquare, DotSquareIcon, Send, Square, SquareDot } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-w-[320px] w-full max-w-[100vw] overflow-x-hidden ">
      <Navbar/>
      <div className='flex flex-col lg:flex-row w-full px-4 sm:px-5 md:px-6 lg:px-14 py-10 sm:py-12 md:py-14 lg:py-15 gap-8 lg:gap-14'>

          <div className='w-1/2 flex flex-col gap-30  '>
          <div className='w-full'>
          <h1 className='lg:text-6xl md:text-5xl  text-4xl w-full   font-semibold '>Go anywhere with Uber</h1>
          </div>
          
          
          <div className='flex flex-col gap-4 mx-auto md:mx-0 lg:w-[400px] w-[300px] justify-center relative'>
            <div className='bg-[#f3f3f3] py-1 cursor-text w-full  px-4 gap-4 relative rounded group flex focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black items-center justify-start'>

           
            <Dot className='size-2 stroke-2 bg-black rounded-full'/>
          
            
          
            
            <input type="text" className='outline-none  py-2' placeholder='Pickup location' />

            <Send className='absolute right-0 mr-3'/>
            

            </div>
            <div className="flex justify-center absolute top-8 left-5 z-10">
    <div className="border-l border-black h-10 w-0"></div>
  </div>
            <div className='bg-[#f3f3f3]  cursor-text px-4 gap-4 w-full py-1 relative rounded group flex focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black items-center justify-start'>
            
            <Square className='size-2 stroke-2 bg-black'/>
            <input type="text" className='outline-none  py-2' placeholder='Dropoff Location' />



            </div>
       
            <div className='flex gap-2'>
                          
          
              <div className='bg-[#f3f3f3] w-[50%]  cursor-text py-2 px-4 gap-3 rounded group flex focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black items-center flex-1'>
               <div>
               <Calendar className='size-4 '/>
               </div>
                <input type="date" className='outline-none py-2 flex-1' placeholder='Today' />
              </div>
              
              <div className='bg-[#f3f3f3] cursor-text w-1/2 py-2 px-4 gap-4 rounded group flex focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black items-center flex-1'>
                <div>
                  <Clock className='size-4 '/>
                </div>
                <input type="text" className='outline-none py-2 flex-1' placeholder='Today' />
              </div>
            </div>
           

          
            
           
            <button></button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full aspect-square">
  <div className="w-full h-full bg-black rounded-lg">

  </div>
</div>

       </div>
    </div>
  )
}

export default Home