import React from 'react'
import { Typography } from '@mui/material'
import { Button } from './ui/Button'
import Image from 'next/image'
import wave from '@/assets/wave.svg'
import { Typewriter } from 'react-simple-typewriter'

interface HeroSectionProps {
  title: string;
  firstdesc: string;
  seconddesc?: string;
  btntitle: string;
  image: any;
  home?: boolean
}


const HeroSection: React.FC<HeroSectionProps> = ({ title, btntitle, firstdesc, image, seconddesc, home }) => {
  return (
    <section className='bg-primary text-white'>
      <div className='pt-7 mx-auto w-[80%] flex justify-between sm:flex-col md:flex-col md:gap-8 sm:gap-8 items-center h-[75vh]'>
        <div className='w-[422px] sm:w-auto md:w-auto'>
          <Typography variant='h1'>{title}</Typography>
          <div className="flex items-center space-x-2">
            <Typography variant="h1" className="">
              {home &&
                <Typewriter
                  words={['Property Lawyer', 'Real Estate', 'Cleaner', 'Painter', 'Mortgage Broker']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              }
            </Typography>
          </div>
          <p className='mt-6 D_p1'>{firstdesc}</p>
          {seconddesc && <p className='mt-2 D_p1'>{seconddesc}</p>}
          <Button variant='default' size='default' className='mt-10 sm:w-full md:w-full'><Typography variant='button'>{btntitle}</Typography></Button>
        </div>
        <div>
          <Image src={image} alt='hero' className='h-auto w-[533px]' width={600} height={600} />
        </div>
      </div>
      <Image src={wave} alt='wave' className='w-full' />
    </section>
  )
}

export default HeroSection
