import { Typography } from '@mui/material'
import React from 'react'
import JourneyCard from "@/components/JourneyCard"

const JourneyComponent = () => {
    const cardData = [
        {
            title: "Buying real estate and don’t know where to start?",
            firstdesc: "Buyer’s Blueprint: Your complimentary standardised guide for buying real estate.",
            seconddesc: "Explore our buying checklist, designed to guide you every step of the way.",
            btntitle: "BUYER’S CHECKLIST",
        },
        {
            title: "Selling real estate and don’t know where to start?",
            firstdesc: "Seller's Blueprint: Your complimentary standardised guide to selling real estate.",
            seconddesc: "Explore our selling checklist, designed to guide you every step of the way.",
            btntitle: "SELLER’S CHECKLIST",
        },
        {
            title: "Are you a real estate expert?",
            firstdesc: "Are you a real estate pros or tradie looking for more work? Do you strive for best in class customer service? ",
            seconddesc: "Join our community, and grow your business and provide expert guidance.",
            btntitle: "PARTNER WITH US",
        }
    ]
    return (
        <div className='bg-primary p-14 sm:p-5 md:p-5'>
            <div className='flex justify-center flex-col items-center text-white text-center'>
                <Typography variant="h2" className='w-[520px] sm:w-full md:w-full'>Start your real estate journey with Your Property Buddies</Typography>
                <Typography variant="D_p1" className='mt-6'>Real estate professionals connections and guidance at your fingertips</Typography>
            </div>
            <div className="mt-14 flex justify-center items-center sm:flex-col md:flex-col gap-4">
                {cardData.map((data, index) => (
                    <JourneyCard key={index} title={data.title} firstdesc={data.firstdesc} seconddesc={data.seconddesc} btntitle={data.btntitle} />
                ))}
            </div>
        </div>
    )
}

export default JourneyComponent