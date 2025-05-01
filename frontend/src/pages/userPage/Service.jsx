import React, { useEffect, useState } from "react";
import uberMap from "../../assets/ubermap.png";
import { Calendar, Clock, Dot, Send, Square } from "lucide-react";
import { motion, AnimatePresence, m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LocationSearchPanel from "../../components/LocationSearchPanel";
import UserRequestForm from "../../components/UserRequestForm";
import MobilePopup from "../../components/MobilePopup";
import CarPopup from "../../components/CarPopup";

import uberX from '../../assets/uberCarTaxi.jpeg';
import uberComfort from '../../assets/uberDriver2.webp';
import uberBlack from '../../assets/bikeuber.webp';


const UserService = () => {
  const [loaded, setLoaded] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isDriverOpen, setIsDriverOpen] = useState(false);
  const [isCarOpen, setIsCarOpen] = useState(false);
  const [isCar,setIsCar]=useState({
    carName:'',
    carImg:'',
  });

  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  const handleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  const handleDriver = () => {
    setIsDriverOpen(!isDriverOpen);
  };

  const handleCarSelect = () => {
    setIsDriverOpen(false);
    // Add navigation or other logic when a car is selected
    // navigate('/driver-interface');
  };

  return (
    <div className="min-h-screen relative bg-white">
      <motion.img
      onClick={()=>{setIsDriverOpen(false);
        setIsSheetOpen(false);
      }}
        src={uberMap}
        initial={{ scale: 0.01, borderRadius: "100%", opacity: 0 }}
        animate={{ scale: 1, borderRadius: "0%", opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.5, ease: "easeInOut" }}
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

<LocationSearchPanel 
  isCar={isCar} 
  onCarPopupRequest={() => setIsDriverOpen(true)}
/>

      {/* Desktop View */}
      <motion.form
        initial={{
          top: "60%",
          left: "3.75rem",
          opacity: 0,
          scale: 0.9,
          position: "absolute",
        }}
        animate={{
          top: "13%",
          left: "5%",
          opacity: 1,
          scale: 1,
          position: "absolute",
        }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="z-10 md:flex hidden px-8 py-10 bg-[#fafafa] hover:bg-[#fafafa]/90 rounded-xl shadow-lg"
      >
        <UserRequestForm
          mode={"0"}
          handleAuth={() => {}}
          isUserExists={false}
        />
      </motion.form>

      {!isSheetOpen && (
        <div className="top-0 text-4xl font-medium tracking-tight z-30 text-black absolute left-5 lg:left-10 lg:top-5 md:top-5">
          Uber
        </div>
      )}

      {/* Mobile View */}
      <form className="md:hidden flex flex-col gap-3 fixed bottom-0 justify-center left-0 w-full px-4 py-10 rounded-t-xl shadow-2xl bg-[#fafafa] z-10">
<div className="flex justify-between gap-2 items-center">
<h1 className="text-2xl font-semibold">Find a trip</h1>
<div className="mt-4">
  {isCar?.carName && isCar?.carImg && (
    <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
      <img 
        src={isCar.carImg} 
        alt={isCar.carName} 
        className="w-10 h-10 object-cover rounded-full"
      />
      <div>
        <p className="font-medium">{isCar.carName} selected</p>
        <p className="text-sm text-gray-500">Driver is on the way</p>
      </div>
    </div>
  )}
</div>
</div>
        <UserRequestForm 
          mode="handleSheet" 
          handleSheet={handleSheet} 
          handleDriver={handleDriver} 

        />
      </form>

      <div>
        {!isDriverOpen && (
          <MobilePopup handleSheet={handleSheet} isSheetOpen={isSheetOpen}  isCar={isCar}
          setIsCar={setIsCar}/>
        )}
      </div>
      
      <CarPopup 
        isCarPopup={isDriverOpen}
        onClose={() => setIsDriverOpen(false)}
        onCarSelect={handleCarSelect}
        isCar={isCar}
        setIsCar={setIsCar}
      />
    </div>
  );
};

export default UserService;