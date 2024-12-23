import React from 'react'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { Button } from './ui/Button'
import logo from '@/assets/logo.png'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center px-[50px] py-[20px] bg-primary'>
                <div>
                    <Image src={logo} alt='logo' className='h-auto w-40' width={209} height={67} />
                </div>
                <div>
                    <ul className='flex gap-14'>
                        <li><Typography variant='button' className='text-white cursor-pointer'>for Buyers & sellers</Typography></li>
                        <li><Typography variant='button' className='text-white cursor-pointer'>for Buyers & sellers</Typography></li>
                        <li><Typography variant='button' className='text-white cursor-pointer'>for Buyers & sellers</Typography></li>
                    </ul>
                </div>
                <div className='flex gap-10'>
                    <Button variant='outline' size='default'><Typography variant='button'>LOGIN</Typography></Button>
                    <Button variant='default' size='default'><Typography variant='button'>GET STARTED</Typography></Button>
                </div>
            </div>
        </>
    )
}

export default Navbar
