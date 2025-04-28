import React, { createContext, useState } from 'react'

export const CaptainDataContext = createContext()

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        },
        vehicle: {
            color: '',
            plate: '',
            capacity: 0,
            vehicleType: ''
        },
        status: 'inactive'
    })
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)
    const updateCaptain=(captainData)=>{
        setCaptain(captainData)
    }
    const value={
        captain,
        setCaptain,
        updateCaptain,
        isLoading,
        setIsLoading,
        error,
        setError
    }
    return (
        <div>
            <CaptainDataContext.Provider value={value}>
                {children}
            </CaptainDataContext.Provider>
        </div>
    )
}

export default CaptainContext