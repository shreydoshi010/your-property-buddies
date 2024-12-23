import { Typography } from '@mui/material'
import React from 'react'

const Needhelp = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[260px] w-[875px] bg-white border rounded-lg shadow-md">
            <Typography variant="h2" className="text-[#02010D]">Need help with real estate?</Typography>
            <Typography variant="D_p1" className="mt-2 text-gray-600">We’re here for you, let’s get started!</Typography>
            <button
                className="mt-8 px-6 py-2 bg-[#77722E] text-white font-medium text-base rounded-[4px]"
            >
                GET STARTED
            </button>
        </div>
    )
}

export default Needhelp

{/* <div className="bg-[#4D4B2F] flex justify-center items-center my-10">
              <JourneyComponent />
            </div>
            <div className="flex justify-center my-14">
              <Needhelp />
            </div> */}