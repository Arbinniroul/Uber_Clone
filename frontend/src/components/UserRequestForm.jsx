import { BatteryLow, Calendar, Calendar1, CalendarPlus, CalendarPlusIcon, Circle, Clock, Dot, DotSquare, DotSquareIcon, Send, Square, SquareDot } from 'lucide-react'

import React from 'react'

const UserRequestForm = ({handleAuth,handleClick,isUserExists,mode,handleSheet,handleDriver}) => {
   
  return (
    <div className={mode==='1'? 'w-min-500px':'w-full'}>
          <div className='flex flex-col gap-4  md:mx-0 lg:w-[400px] w-full   justify-center relative'>
          
            <div onInput={handleClick} className={'bg-[#f3f3f3]  py-1 cursor-text w-full  px-4 gap-4 relative rounded group flex focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black items-center justify-start'}>

           
            <Dot className='size-2 stroke-2 bg-black rounded-full'/>
          
            
          
            
            <input type="text" autoFocus='true'  onClick={mode==="handleSheet"?handleSheet:handleClick}  className='outline-none  py-2' placeholder='Pickup location' />

            <Send className='absolute right-0 mr-3'/>
            

            </div>
            <div className="flex justify-center absolute top-8 left-5 z-10">
    <div className="border-l border-black h-10 w-0"></div>
  </div>
            <div className='bg-[#f3f3f3]  cursor-text px-4 gap-4 w-full py-1 relative rounded group flex focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black items-center justify-start'>
            
            <Square className='size-2 stroke-2 bg-black'/>
            <input type="text" className='outline-none  py-2' placeholder='Dropoff Location' onClick={mode==="handleSheet"?handleSheet:handleClick}    />



            </div>
       {
        mode==="1" ? (
             <div className='flex flex-col gap-4 '>

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
                       
            
                        <div className='flex gap-10 items-center '>
              <button className='px-6 py-3 bg-black text-white rounded-lg hover:bg-black/85 cursor-pointer translate-tranform duration-300 ease-in-out' onClick={isUserExists?()=>{}:()=>handleAuth("signup")}>See Prices</button>
              <button className='text-gray-600 border-b-1 cursor-pointer' onClick={isUserExists?()=>{}:()=>handleAuth("login")}>{isUserExists?"Find Driver":"Login to see your recent activity"}</button>
            </div>
             </div>
        )
        :
        (

            mode==="removeButton" ? null:  
            <button className='px-6 py-3 bg-black w-fit text-white rounded-lg hover:bg-black/85 cursor-pointer translate-tranform duration-300 ease-in-out' onClick={handleDriver} type='button' >Leave Now</button>
            


          
        )
       }
           
            </div>
    </div>
  )
}

export default UserRequestForm