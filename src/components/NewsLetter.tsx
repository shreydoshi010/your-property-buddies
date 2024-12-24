import { Typography } from '@mui/material';
import React from 'react';

const NewsLetter: React.FC<any> = () => {
    return (
        <div className='bg-primary text-white py-14'>
            <div className='mx-auto w-[65%]'>
                <p className='D_p1'>Want to keep up with real estate latest news?</p>
                <div className='flex items-center justify-between'>
                    <div><Typography variant='h2' className='mt-4'>Subscribe to our Buddies’ Bulletin </Typography></div>
                    
                    <div className="flex justify-center h-[50px] bg-primary border-2 border-secondary rounded-[4px]">
                        <div className="flex w-full overflow-hidden rounded-[4px]">
                            <input
                                type="email"
                                placeholder="Type your email"
                                className="flex-grow px-3 py-3 w-[400px] text-gray-700 placeholder-gray-500 bg-white focus:outline-none"
                            />
                            <button className="bg-secondary px-4 py-2 text-black font-semibold hover:bg-secondary-light focus:outline-none">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
