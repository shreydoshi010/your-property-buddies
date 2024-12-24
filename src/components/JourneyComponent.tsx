import { Typography } from '@mui/material'
import React from 'react'
import JourneyCard from "@/components/JourneyCard"

const JourneyComponent = () => {
    return (
        <div className='bg-primary p-14'>
            <div className='flex justify-center flex-col items-center'>
            <Typography variant="h2" className='text-white text-center w-[520px]'>Start your real estate journey with Your Property Buddies</Typography>
            <Typography variant="D_p1" className='text-white text-center mt-6'>Real estate professionals connections and guidance at your fingertips</Typography>
            </div>
            
            <div className="mt-14">
                <JourneyCard />
            </div>
        </div>
    )
}

export default JourneyComponent