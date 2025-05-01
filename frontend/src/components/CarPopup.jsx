import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Cars from './Cars';
import { X } from 'lucide-react';

const CarPopup = ({ isCarPopup, onClose, onCarSelect, isCar, setIsCar }) => {
  const handleCarSelect = () => {
    onCarSelect();
    onClose();
  };

  return (
    <AnimatePresence>
      {isCarPopup && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-0  left-0 right-0 bg-white z-[100] p-4 flex flex-col rounded-t-3xl shadow-xl"
          style={{ height: '80vh' }} 
        >
          {/* Header with close button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Choose your ride</h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto pb-4">
            <Cars onCarSelect={handleCarSelect} isCar={isCar} setIsCar={setIsCar} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CarPopup;