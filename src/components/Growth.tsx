import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import arrow from "@/assets/arrow.svg"


interface GrowthProps {
    title: string;
}


const Growth: React.FC<GrowthProps> = ({ title }) => {
    return (
        <div className='flex justify-between items-center bg-[#77722E] rounded-lg p-4  h-[60px] text-center gap-5 min-w-[275px] text-white'>
            <Typography variant='h4'>{title}</Typography>
            <Image src={arrow} alt={title} />
        </div>
    )
}

export default Growth