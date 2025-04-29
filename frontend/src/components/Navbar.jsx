import React   from 'react'
import { LucideMenu, MenuIcon, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
const Navbar = ({handleAuth,isUserExists}) => {


  const navItems = [
    { label: 'Ride', path: '/ride' },
    { label: 'Drive', path: '/drive' },
    { label: 'Business', path: '/business' },
    { label: 'Uber Eats', path: '/eats' },
    { label: 'About', path: '/about' }
  ];
  return (
    <div className='max-w-full  relative flex justify-between items-center py-3 px-4 sm:py-[14px] sm:px-6 md:px-10 lg:px-12 bg-black text-white'>
        <div className='flex items-center gap-9'>
        <h1 className='text-[25px] tracking-tight uber'>Uber</h1>
            <div className='hidden lg:flex md:hidden text-sm font-semibold'>
            <ul className='hidden lg:flex gap-7 text-sm font-semibold'>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.path} className='hover:text-gray-300 transition-colors'>
                {item.label}
              </a>
            </li>
          ))}
              </ul>
            </div>
        </div>
           <div className='flex items-center gap-3 lg:gap-1'>
            <div className='hidden lg:flex  gap-2 px-4 py-1 items-center  justify-center bg-white rounded-full text-black'>
              <Search className='size-4'  />

              <input type="text" className='outline-none border-none placeholder:text-sm px-1' placeholder='Search Uber.com '  />
            </div>
            <div className=''>
            <Search className='size-4 text-white lg:hidden'  />

            </div>
            <div className='flex gap-3 text-sm font-medium items-center'>
              <button className=' cursor-pointer hidden  lg:flex  px-3 py-2 rounded-full bg-black hover:bg-gray-800 transition-all transform duration-500 ease-in-out '>Help</button>
              <button className='bg-white px-3 py-2 rounded-full text-black transition-all transform ease-in-out duration-300 cursor-pointer hover:bg-white/80' onClick={isUserExists?()=>{}:()=>handleAuth("login")} >{isUserExists ? "Logout" :"My Account" }</button>
              <button className='flex lg:hidden' ><LucideMenu/></button>
            </div>
           </div>
            
       
    </div>
  )
}

export default Navbar