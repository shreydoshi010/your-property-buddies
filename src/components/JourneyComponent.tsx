import { Typography } from '@mui/material'
import React from 'react'
import JourneyCard from "@/components/JourneyCard"

const JourneyComponent = () => {
    return (
        <div className='bg-[#4D4B2F] flex justify-center items-center my-10 flex-col '>
            <Typography variant="h2" className='text-white '>Start your real estate journey with Your Property Buddies</Typography>
            <div className="">
                <JourneyCard />
            </div>
        </div>
    )
}

export default JourneyComponent