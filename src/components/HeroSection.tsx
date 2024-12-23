import React from 'react'
import { Typography } from '@mui/material'
import { Button } from './ui/Button'
import Image from 'next/image'
import hero from '@/assets/hero.png'
import wave from '@/assets/wave.svg'
import { Typewriter } from 'react-simple-typewriter'

const HeroSection = () => {
  return (
    <section className='bg-primary text-white'>
      <div className='pt-7 mx-auto w-[80%] flex justify-between items-center'>
        <div className='w-[422px]'>
            <Typography variant='h1'>Find a top-rated</Typography>
            <div className="flex items-center space-x-2">
            <Typography variant="h1" className="">
              <Typewriter
                words={['Property Lawyer', 'Real Estate', 'Cleaner', 'Painter', 'Mortgage Broker']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </Typography>
          </div>
            <Typography variant='D_p1' className='mt-6'>We connect you to trusted real estate pros and tradies verified by us, at no cost, across Australia and New Zealand.</Typography>
            <Button variant='default' size='default' className='mt-10'><Typography variant='button'>GET STARTED</Typography></Button>
        </div>
        <div>
            <Image src={hero} alt='hero' className='h-auto w-[533px]' width={600} height={600} />
        </div>
      </div>
      <Image src={wave} alt='wave' className='w-full' />
    </section>
  )
}

export default HeroSection
