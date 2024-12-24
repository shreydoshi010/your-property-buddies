import { Typography } from '@mui/material';
import React from 'react';

const NewsLetter: React.FC<any> = () => {
    return (
        <div className='bg-primary text-white py-6'>
            <div className='mx-auto w-[60%] sm:w-[90%] md:w-[90%] xl:w-[90%] xxl:w-[70%]'>
                <p className='D_p1'>Want to keep up with real estate latest news?</p>
                <div className='flex items-center justify-between sm:hidden xl:hidden md:hidden gap-5'>
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
                <div className='hidden sm:block md:block xl:block'>
                    <h2 className='font-semibold text-2xl mt-2'>Subscribe to our Buddies’ Bulletin</h2>
                    <input
                        type="email"
                        placeholder="Type your email"
                        className="flex-grow px-3 py-3 mt-5 w-full border-2 rounded-[4px] border-secondary text-gray-700 placeholder-gray-500 bg-white focus:outline-none"
                    />
                    <button className="bg-secondary px-4 py-3 mt-8 w-full text-black font-semibold hover:bg-secondary-light focus:outline-none">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;

