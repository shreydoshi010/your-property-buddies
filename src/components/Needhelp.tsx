import { Typography } from '@mui/material'
import React from 'react'
import { Button } from './ui/Button'

const Needhelp = () => {
    return (
        <div className='flex bg-[#F8F8F5] justify-center items-center py-14 sm:px-5 md:px-14 xl:px-14'>

            <div className="flex flex-col items-center justify-center text-center h-[260px] w-[875px] sm:w-full md:w-full sm:px-5 md:px-5 bg-white border rounded-lg shadow-md ">
                <Typography variant="h2" className="text-[#02010D] sm:text-[28px] md:text-[28px]">Need help with real estate?</Typography>
                <Typography variant="D_p1" className="mt-2 text-gray-600">We’re here for you, let’s get started!</Typography>
                {/* <Button
                variant="outlinePrimary"
                size="default"
                className="mt-8 px-6 py-2 bg-[#77722E] text-white font-medium text-base rounded-[4px]"
            >
                <Typography variant="button">GET STARTED</Typography>
            </Button> */}
                <Button variant="outline" size="default" className="bg-primary-light mt-10">
                    <Typography variant="button">Get Started</Typography>
                </Button>
            </div>
        </div>
    )
}

export default Needhelp