import React, { useEffect, useState } from 'react';
import uberMap from "../../assets/ubermap.png";
import { Calendar, Clock, Dot, Send, Square } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const UserService = () => {
  const [loaded, setLoaded] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  const handleInputFocus = () => {
    setIsSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    navigate('/ride-confirmation'); 
  };

  return (
    <div className='min-h-screen relative bg-white overflow-hidden'>
      <motion.img
        src={uberMap}
        initial={{ scale: 0.01, borderRadius: '100%', opacity: 0 }}
        animate={{ scale: 1, borderRadius: '0%', opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.5, ease: 'easeInOut' }}
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

      {/* Desktop View */}
      <motion.form
        onSubmit={submitHandler}
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
        className='z-10 w-[90%] sm:w-[400px] md:block hidden px-8 py-10 bg-[#fafafa] hover:bg-[#fafafa]/90 rounded-xl shadow-lg'
      >
        <h1 className='text-2xl font-medium mb-4 -mt-4'>Pick your Address</h1>
        <div className='bg-[#f3f3f3] py-1 px-4 gap-4 rounded group flex items-center justify-start relative focus-within:ring-2 mb-3 focus-within:ring-offset-2 focus-within:ring-black'>
          <Dot className='size-2 stroke-2 bg-black rounded-full' />
          <input 
            type="text" 
            name="pickup"
            value={formData.pickup}
            onChange={handleInputChange}
            className='outline-none py-2 bg-transparent w-full' 
            placeholder='Pickup location' 
            required
            autoFocus
          />
          <Send className='absolute right-3' />
        </div>

        <div className="flex justify-center z-10 my-2 top-25 left-13 absolute">
          <div className="border-l border-black h-10 w-0"></div>
        </div>

        <div className='bg-[#f3f3f3] py-1 px-4 gap-4 rounded group flex items-center justify-start relative focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black'>
          <Square className='size-2 stroke-2 bg-black' />
          <input 
            type="text" 
            name="dropoff"
            value={formData.dropoff}
            onChange={handleInputChange}
            className='outline-none py-2 bg-transparent w-full' 
            placeholder='Dropoff Location' 
            required
          />
        </div>


        <div className='flex gap-2 mt-4'>
          <div className='bg-[#f3f3f3] w-1/2 py-2 px-4 gap-3 rounded group flex items-center focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black'>
            <Calendar className='size-4' />
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className='outline-none py-2 flex-1 bg-transparent' 
              required
            />
          </div>

          <div className='bg-[#f3f3f3] w-1/2 py-2 px-4 gap-4 rounded group flex items-center focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black'>
            <Clock className='size-4' />
            <input 
              type="time" 
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className='outline-none py-2 flex-1 bg-transparent' 
              required
            />
          </div>
        </div>

        <div className='flex gap-4 mt-6 justify-center'>
          <button 
            type="submit" 
            className='px-6 py-3 bg-black text-white rounded-lg hover:bg-black/85 transition'
          >
            See Prices
          </button>
          <button type="button" className='text-gray-600 border-b border-gray-400'>
            Find Driver
          </button>
        </div>
      </motion.form>

      {!isSheetOpen && (
        <div className='top-0 text-4xl font-medium tracking-tight z-30 text-black absolute left-5 lg:left-10 lg:top-5 md:top-5'>
          Uber
        </div>
      )}

      {/* Mobile View */}
      <form 
        onSubmit={submitHandler}
        className="md:hidden flex flex-col gap-3 fixed bottom-0 justify-center left-0 w-full px-4 py-10 rounded-t-xl shadow-2xl bg-[#fafafa] z-10"
      >
        <h1 className='text-2xl font-semibold'>Find a trip</h1>
        <div 
          onClick={handleInputFocus} 
          className='bg-[#f3f3f3] py-1 px-4 gap-4 rounded group flex items-center justify-start relative focus-within:ring-2 mb-3 focus-within:ring-offset-2 focus-within:ring-black'
        >
          <Dot className='size-2 stroke-2 bg-black rounded-full' />
          <input 
            type="text" 
            name="pickup"
            value={formData.pickup}
            onChange={handleInputChange}
            className='outline-none py-2 bg-transparent w-full' 
            placeholder='Pickup location' 
            required
          />
          <Send className='absolute right-3' />
        </div>
     
        <div className="flex justify-center z-30 my-2 absolute left-9 top-28">
          <div className="border-l border-black h-12 w-0"></div>
        </div>

        <div 
          onClick={handleInputFocus} 
          className='bg-[#f3f3f3] py-1 px-4 gap-4 rounded group flex items-center justify-start relative focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black'
        >
          <Square className='size-2 stroke-2 bg-black' />
          <input 
            type="text" 
            name="dropoff"
            value={formData.dropoff}
            onChange={handleInputChange}
            className='outline-none py-2 bg-transparent w-full' 
            placeholder='Dropoff Location' 
            required
          />
        </div>

        <div className='bg-black text-white w-fit px-2 py-1 rounded-md'>
          <button type="button" onClick={() => navigate('/')}>Previous</button>
        </div>
      </form>

      {/* Mobile Sheet */}
      <AnimatePresence>
        {isSheetOpen && (
          <motion.form
            onSubmit={submitHandler}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-white z-20 p-4 overflow-y-auto"
          >
            <div className="flex justify-end">
              <button 
                type="button" 
                onClick={handleCloseSheet} 
                className="text-gray-500"
              >
                Close
              </button>
            </div>
            <h1 className='text-2xl font-medium mb-4'>Pick your Address</h1>
            <div className='bg-[#f3f3f3] py-1 px-4 gap-4 rounded group flex items-center justify-start relative focus-within:ring-2 mb-3 focus-within:ring-offset-2 focus-within:ring-black'>
              <Dot className='size-2 stroke-2 bg-black rounded-full' />
              <input 
                type="text" 
                name="pickup"
                value={formData.pickup}
                onChange={handleInputChange}
                className='outline-none py-2 bg-transparent w-full' 
                placeholder='Pickup location' 
                autoFocus 
                required
              />
              <Send className='absolute right-3' />
            </div>

            <div className="flex justify-center z-10 my-2 absolute left-9 top-28">
              <div className="border-l border-black h-10 w-0"></div>
            </div>

            <div className='bg-[#f3f3f3] py-1 px-4 gap-4 rounded group flex items-center justify-start relative focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black'>
              <Square className='size-2 stroke-2 bg-black' />
              <input 
                type="text" 
                name="dropoff"
                value={formData.dropoff}
                onChange={handleInputChange}
                className='outline-none py-2 bg-transparent w-full' 
                placeholder='Dropoff Location' 
                required
              />
            </div>

            <div className='flex gap-4 mt-6 justify-center'>
              <button 
                type="submit" 
                className='px-6 py-3 bg-black text-white rounded-lg hover:bg-black/85 transition'
              >
                See Prices
              </button>
              <button 
                type="button" 
                className='text-gray-600 border-b border-gray-400'
              >
                Find Driver
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserService;