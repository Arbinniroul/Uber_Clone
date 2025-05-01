import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight } from 'lucide-react';

import uberX from '../assets/uberCarTaxi.jpeg';
import uberComfort from '../assets/uberDriver2.webp';
import uberBlack from '../assets/bikeuber.webp';

const Cars = ({ onCarSelect, isCar, setIsCar }) => {
  const carOptions = [
    {
      id: 1,
      name: "Taxi",
      price: "$24.23",
      time: "3 min",
      seats: 4,
      type: "Everyday",
      image: uberX
    },
    {
      id: 2,
      name: "Premium Taxi",
      price: "$29.53",
      time: "5 min",
      seats: 4,
      type: "Newer cars",
      image: uberComfort
    },
    {
      id: 3,
      name: "Uber Bike",
      price: "$42.80",
      time: "7 min",
      seats: 4,
      type: "Premium",
      image: uberBlack
    },
  ];

  const handleVehicle = (car) => {
    setIsCar({
      carName: car.name,  
      carImg: car.image   
    });
    onCarSelect(); // Optional: if you want to trigger additional actions
  };

  return (
    <div className="space-y-4">
      {carOptions.map((car) => (
        <motion.div
          key={car.id}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleVehicle(car)}
          className={'flex items-center justify-between p-4 border-gray-400 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors'}
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gray-100 rounded-full">
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-6 h-6 object-contain" 
              />
            </div>
            <div>
              <h3 className="font-medium text-xl">{car.name}</h3>
              <p className="text-sm text-gray-500">{car.type}</p>
              <div className="flex items-center mt-1 space-x-2 text-sm text-gray-500">
                <span className="flex items-center">
                  <User size={14} className="mr-1" /> {car.seats}
                </span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" /> {car.time}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium">{car.price}</span>
            <ArrowRight size={18} className="text-gray-400" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Cars;