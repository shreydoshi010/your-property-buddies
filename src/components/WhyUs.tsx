import React from 'react'
import Image from 'next/image'
import whyUs from "@/assets/whyUs.png"
import { Typography } from '@mui/material'

const WhyUs = () => {
    return (
        <section className='w-[80%] mx-auto py-14'>
            <div className='flex items-center gap-8'>
                <Image src={whyUs} alt="why us?" className='w-[535px]' />
                <div>
                    <Typography variant='h2'>Why Us?</Typography>
                    <div className='mt-4 flex flex-col gap-8'>
                        <div>
                            <Typography variant='h4' className=''>Your Real Estate ally</Typography>
                            <p className='D_p2'>We’ll keep the bar high for professionals we partner with while empowering you with real estate knowledge. So you can navigate the real estate market with confidence.</p>
                        </div>
                        <div>
                            <Typography variant='h4' className=''>Unbiased advice
                            </Typography>
                            <p className='D_p2'>We will always strive to offer impartial and agnostic referrals. Our recommendations are based only on merits and reputation. We’ll never have hidden agendas.</p>
                        </div>
                        <div>
                            <Typography variant='h4' className=''>We are Free!
                            </Typography>
                            <p className='D_p2'>Our service is free for future and current real estate buyers and owners, with no obligation.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WhyUs
