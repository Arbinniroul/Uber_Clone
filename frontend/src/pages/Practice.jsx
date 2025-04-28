import React, { useState } from 'react'
import img1 from "../assets/uber-driver.svg"
import img2 from "../assets/domino-studio-164_6wVEHfI-unsplash.jpg"

const Practice = () => {
    const [isMove, setIsMove] = useState(0)
    const images = [img1, img2];
    const [isOpen, setIsOpen] = useState(false)

    const moveImages = (image) => {
        if (image === "right") {
            if (isMove >= 0 && isMove < (images.length) - 1) {
                setIsMove(() => isMove + 1)
            }
            else if (isMove >= (images.length) - 1) {
                setIsMove(0)
            }
        }
        else if (image === "left") {
            if (isMove > 0 && isMove < (images.length) + 1) {
                setIsMove(isMove - 1);
            }
            else if (isMove === 0) {
                setIsMove((images.length) - 1)
            }
        }
    }

    const handleNavPopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='min-h-screen'>
            {/* Navbar - Improved Responsiveness */}
            <div className='relative flex justify-between items-center py-4 px-4 sm:py-5 sm:px-6 md:px-10 lg:px-12 bg-black text-white'>
                <div className='text-xl font-bold'>
                    Logo
                </div>
                
                {/* Desktop Navigation */}
                <div className='hidden md:block'>
                    <ul className='flex gap-6 lg:gap-8'>
                        <li className='hover:text-gray-300 transition-colors'>Home</li>
                        <li className='hover:text-gray-300 transition-colors'>Contact</li>
                        <li className='hover:text-gray-300 transition-colors'>More Info</li>
                        <li className='hover:text-gray-300 transition-colors'>About Us</li>
                    </ul>
                </div>
                
                <div className='flex items-center gap-4'>
                    <button className='hidden sm:inline-block px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors'>
                        Login
                    </button>
                    <button 
                        onClick={handleNavPopup} 
                        className='md:hidden text-2xl focus:outline-none'
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Popup */}
            {isOpen && (
                <div className='absolute z-10 w-full bg-black bg-opacity-90 md:hidden'>
                    <div className='container mx-auto px-4 py-3'>
                        <ul className='flex flex-col gap-2'>
                            <li className='px-4 py-3 hover:bg-gray-800 rounded transition-colors'>Home</li>
                            <li className='px-4 py-3 hover:bg-gray-800 rounded transition-colors'>Contact</li>
                            <li className='px-4 py-3 hover:bg-gray-800 rounded transition-colors'>More Info</li>
                            <li className='px-4 py-3 hover:bg-gray-800 rounded transition-colors'>About Us</li>
                            <li className='px-4 py-3 sm:hidden'>
                                <button className='w-full py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors'>
                                    Login
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Carousel - Improved Responsiveness */}
            <div className='relative h-[60vh] sm:h-[70vh] md:h-[80vh] bg-gray-100 overflow-hidden'>
                <img 
                    src={images[isMove]} 
                    className='w-full h-full object-cover object-center transition-opacity duration-500'
                    alt='Carousel item'
                />
                
                {/* Carousel Controls */}
                <button 
                    className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all'
                    onClick={() => moveImages("left")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button 
                    className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all'
                    onClick={() => moveImages("right")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Featured Products - Improved Responsiveness */}
            <div className='container mx-auto px-4 sm:px-6 py-10 md:py-16'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter mb-8 md:mb-12'>
                    Featured Products
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className='bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='h-48 sm:h-56 md:h-64 bg-gray-700 flex items-center justify-center'>
                                <span className='text-white text-lg'>Product {item}</span>
                            </div>
                            <div className='p-4'>
                                <h3 className='text-white text-lg font-medium mb-2'>Product Title</h3>
                                <p className='text-gray-300 text-sm mb-4'>Product description goes here</p>
                                <button className='w-full py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors text-white'>
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Practice