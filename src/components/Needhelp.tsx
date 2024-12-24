import { Typography } from '@mui/material'
import React from 'react'
import { Button } from './ui/Button'
interface NeedhelpProps {
    title: string;
    firstdesc: string;
    btntitle: string;
    className?: string;
}

const Needhelp: React.FC<NeedhelpProps> = ({ title, firstdesc, btntitle, className }) => {
    return (
        <div className={`flex bg-[#F8F8F5] justify-center items-center py-14 sm:px-5 md:px-14 xl:px-14 ${className}`}>

            <div className="flex flex-col items-center justify-center text-center h-[260px] w-[875px] sm:w-full md:w-full sm:px-5 md:px-5 bg-white border rounded-lg shadow-md ">
                <Typography variant="h2" className="text-[#02010D] sm:text-[28px] md:text-[28px]">{title}</Typography>
                <p className="D_p1 mt-2 text-gray-600">{firstdesc}</p>
                <Button variant="outline" size="default" className="bg-primary-light mt-10">
                    <Typography variant="button">{btntitle}</Typography>
                </Button>
            </div>
        </div>
    )
}

export default Needhelp