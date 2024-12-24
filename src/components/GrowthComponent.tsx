import React from 'react'
import Growth from './Growth'
import { Typography } from '@mui/material'

const GrowthComponent = () => {
    const data = [
        {
            title: "Mortgage Brokers"
        },
        {
            title: "Conveyancers"
        },
        {
            title: "Real Estate Agents"
        },
        {
            title: "Property Inspectors"
        },
        {
            title: "Home Stagers"
        },
        {
            title: "Electricians"
        },
        {
            title: "Builders"
        },
        {
            title: "And other tradies"
        },
    ]
    return (
        <div className='py-10 w-[90%] mx-auto flex justify-center text-center items-center flex-col'>
            <Typography variant='h2' className='mt-4'>Join our growing community of:</Typography>
            <div className='grid grid-cols-4 gap-8 my-8 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2'>
                {data.map((item, index) => (
                    <Growth key={index} title={item.title} />
                ))}
            </div>
        </div>
    )
}

export default GrowthComponent