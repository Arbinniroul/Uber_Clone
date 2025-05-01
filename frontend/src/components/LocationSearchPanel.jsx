import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LocationEditIcon } from 'lucide-react';

const LocationSearchPanel = ({ typing, searchResult, mode = "desktop", isCar, onRequestCarPopup }) => {
  const handleClick = () => {
    if (!isCar?.carName) {
      onRequestCarPopup?.();
    }
  };

  return (
    <div className="relative w-full h-screen px-2 py-3 md:py-1 md:aspect-square md:px-3 lg:px-10 lg:py-5">
      {mode === "desktop" ? (
        <AnimatePresence>
          {typing && (
            <motion.div
              initial={{ y: 200, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 300, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="py-3 rounded-lg px-3 lg:px-5 flex-col gap-2 z-10 hidden md:flex"
            >
              {/* Desktop content remains same */}
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <div className='flex flex-col gap-3' onClick={handleClick}>
          <div className='bg-white text-black border-2 border-gray-400 active:border-black relative shadow-md w-full px-3 py-3 rounded-md flex items-center gap-4 mt-10'>
            <LocationEditIcon className='size-6 p-1 rounded-full text-black bg-gray-300' />
            Hello
          </div>
          <div className='bg-white text-black border-2 border-gray-400 active:border-black relative shadow-md w-full mt-1 px-3 py-3 rounded-md flex items-center gap-4'>
            <LocationEditIcon className='size-6 p-1 rounded-full text-black bg-gray-300' />
            Hello
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSearchPanel;