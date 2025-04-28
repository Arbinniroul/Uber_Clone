import React from 'react'
import Navbar from '../components/Navbar'
import { BatteryLow, Calendar, Calendar1, CalendarPlus, CalendarPlusIcon, Circle, Clock, Dot, DotSquare, DotSquareIcon, Send, Square, SquareDot } from 'lucide-react'
import Footer from '../components/Footer'

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
           

            <div className='flex gap-10 items-center '>
  <button className='px-6 py-3 bg-black text-white rounded-lg hover:bg-black/85 cursor-pointer translate-tranform duration-300 ease-in-out'>See Prices</button>
  <span className='text-gray-600 border-b-1 cursor-pointer'>Login to see your recent activity</span>
</div>
           
            </div>
          </div>
          <div className="lg:w-1/2 w-full aspect-square">
  <div className="w-full h-full bg-black rounded-lg">

  </div>

</div>
 


       </div>

       <div className='max-h-screen px-10  py-20'>
  <div className='flex flex-col gap-10 items-center md:items-start'> 
     <h1 className='text-4xl font-bold'>Suggestions</h1>
     <div className='flex gap-2 rounded-lg bg-[#f3f3f3] w-[350px] px-4 py-7'>
      <div className='flex flex-col gap-3'>
      <h3 className='text-base font-semibold '>Ride</h3>
      <p className='text-[12px]'>Go anywhere with uber.Request a ride ,hope in ,and go </p>
      <button className='px-3 py-2 bg-[#ffffff] w-fit rounded-full hover:bg-gray-500/5 text-sm font-semibold cursor-pointer'>Details</button>
      </div>
      <img src="https://mobile-content.uber.com/launch-experience/ride.png" className='size-30 object-center object-cover' alt="" />


     </div>
    
     
   


  </div>
 </div>



 <div className='min-h-screen px-7 py-12 md:px-17 md:py-20'>
 <div className='grid grid-cols-1 lg:grid-cols-2 gap-26 '>
  <div className='flex flex-col gap-5 md:py-10 justify-center '>
  <h1 className='text-4xl font-semibold'>Login to see your recent activity</h1>
  <p>View past trips, tailored suggestions, support resources, and more.</p>
  <button className='px-4 py-3 bg-black w-fit rounded-lg  hover:bg-[#000000]/86  text-sm font-semibold cursor-pointer text-white'>Login in to your account</button>

 <p className='border-b-1 border-black w-fit'>Dont have an Uber account ? SignUp</p>
  </div>
  <div>
    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1730197725/assets/0f/48c7ba-da13-4fdc-b54c-42878042f513/original/Airport-Fall.png" alt="" />
  </div>
  <div >
    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png" className='w-full' alt="" />
  </div>
  <div className='flex flex-col justify-center gap-5 md:py-10  '>
  <h1 className='text-4xl font-semibold'>Drive when you want make what to need</h1>
  <p>Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</p>
  <div className='flex gap-5 items-center '>
  <button className='px-4 py-3 bg-[#000000] w-fit rounded-lg  hover:bg-[#000000]/86   text-sm font-semibold cursor-pointer text-white'>
  Get Started
  </button>
 <p className='border-b-1'>Already have an account? Sign in</p>
  </div>
 
  </div>
  <div className='flex flex-col justify-center gap-5 md:py-10  '>
  <h1 className='text-4xl font-semibold'>The Uber you know, reimagined for business</h1>
  <p>Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size</p>
  <button className='px-4 py-3 bg-black w-fit rounded-lg  hover:bg-[#000000]/86  text-sm font-semibold cursor-pointer text-white'>Get Started</button>

 <p className='border-b-1 border-black w-fit'>Check out our solutions
 </p>

  </div>
  <div>
    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png" alt="" />
  </div>
  <div>
    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1696243800/assets/62/3b076a-3406-4f3b-89de-2cf1a2ccb907/original/uber-one.jpg" alt="" />
  </div>
  <div className='flex flex-col  gap-5 md:py-10 justify-center  '>
  <h1 className='text-4xl font-semibold'>Save on Uber and Uber Eats with Uber One membership</h1>
  <p className='mb-2'>Become an Uber One member for savings and exclusive perks on Uber and Uber Eats.</p>
  <p>Sign up for just $9.99/month.</p>
  <button className='px-4 py-3 bg-black w-fit rounded-lg   hover:bg-[#000000]/86  text-base font-semibold cursor-pointer text-white'>Sign up to save</button>





  </div>
 <div>
 </div>


</div>
</div>
<Footer/>
    </div>
  )
}

export default Home