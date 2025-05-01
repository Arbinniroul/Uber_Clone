import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LocationSearchPanel from './LocationSearchPanel';
import UserRequestForm from './UserRequestForm'; // Make sure this is imported
import { User } from 'lucide-react';
import CarPopup from './CarPopup';

const MobilePopup = ({ isSheetOpen, handleSheet, submitHandler, isCar,
    setIsCar }) => {
  return (
    <div>
          

      <AnimatePresence>
        {isSheetOpen && (
          <motion.form

            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-10 bg-white  p-4 overflow-y-auto"
          >

            <div className="flex justify-between relative">
      <h1 className='text-3xl font-medium '>Find a trip</h1>

              <button
                type="button"
                onClick={handleSheet}
                className="text-gray-500"
              >
                Close
              </button>
            </div>
            <div className='mt-10'>
            <UserRequestForm
              mode="removeButton"
              handleAuth={() => {}}
              isUserExists={false}/>
            <LocationSearchPanel typing={true} mode="mobile" />
            </div>
            

           
          </motion.form>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default MobilePopup;
